﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.Entities.Concreate
{
    public class TaskUser:IEntity
    {
        [Key]
        public int Id { get; set; }
        public int TaskId { get; set; }

        [ForeignKey("TaskId")]
        public Tasks Task { get; set; }

        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
