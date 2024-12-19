﻿using AutoMapper;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Models.Users;

namespace WebApi.Services
{
    public class UserService : IUserService
    {
        private DataContext _context;
        private readonly IMapper _mapper;

        public UserService(
            DataContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.user_details;
        }

        public User GetById(int id)
        {
            return getUser(id);
        }

        public void Create(CreateRequest model)
        {
            // validate
            if (_context.user_details.Any(x => x.Name == model.Name))
                throw new AppException("User with the name '" + model.Name + "' already exists");

            // map model to new user object
            var user = _mapper.Map<User>(model);

            // save user
            _context.user_details.Add(user);
            _context.SaveChanges();
        }

        public void Update(int id, UpdateRequest model)
        {
            var user = getUser(id);

            // validate
            if (model.Name != user.Name && _context.user_details.Any(x => x.Name == model.Name))
                throw new AppException("User with the name '" + model.Name + "' already exists");

            // copy model to user and save
            _mapper.Map(model, user);
            _context.user_details.Update(user);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var user = getUser(id);
            _context.user_details.Remove(user);
            _context.SaveChanges();
        }

        // helper methods

        private User getUser(int id)
        {
            var user = _context.user_details.Find(id);
            if (user == null) throw new KeyNotFoundException("User not found");
            return user;
        }
    }
}