namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

public class CreateRequest
{

    [Required]
    public int ID { get; set; }

    [Required]
    public string Name { get; set; }
    [Required]
    public string Address { get; set; }
    [Required]
    public string State { get; set; }
    [Required]
    public string District { get; set; }
    [Required]
    public DateTime DateOfBirth { get; set; }
    [Required]
    public string Language { get; set; }

}