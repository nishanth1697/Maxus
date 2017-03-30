﻿using Maxis.Database;
using Maxis.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Maxis.Infrastructure.Repositories.Abstract
{
    public interface IUserRepository
    {
        List<EditUserViewModel> SelectAll();
        List<EditUserViewModel> SelectByID(long id);
        IQueryable Insert(LoginViewModel model);
        void Update(EditUserViewModel model);
        
    }
}
