namespace WebApi.Entities;

using System.Text.Json.Serialization;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
    public string District { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Language { get; set; }

}