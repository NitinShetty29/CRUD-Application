using System.Text.Json.Serialization;
using WebApi.Helpers;
using WebApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Enable detailed logging
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

// Add services to DI container
{
    var services = builder.Services;
    var env = builder.Environment;

    services.AddDbContext<DataContext>();
    services.AddCors();
    services.AddControllers().AddJsonOptions(x =>
    {
        // Serialize enums as strings in API responses (e.g., Role)
        x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

        // Ignore omitted parameters on models to enable optional params (e.g., User update)
        x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    });
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

    // Configure DI for application services
    services.AddScoped<IUserService, UserService>();
}

var app = builder.Build();

app.Logger.LogInformation("Application starting...");

try
{
    // Configure HTTP request pipeline
    app.Logger.LogInformation("Configuring HTTP pipeline...");

    // Global CORS policy
    app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

    // Global error handler
    app.UseMiddleware<ErrorHandlerMiddleware>();

    // Map controllers
    app.MapControllers();

    // Start the application
    app.Run("http://localhost:64404");
}
catch (Exception ex)
{
    app.Logger.LogCritical(ex, "Application terminated unexpectedly.");
}
