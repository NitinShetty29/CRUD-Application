namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

public class UpdateRequest
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
    public string District { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Language { get; set; }


    private string replaceEmptyWithNull(string value)
    {
        return string.IsNullOrEmpty(value) ? null : value;
    }
}