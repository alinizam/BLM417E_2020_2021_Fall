using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Hafta9.Models
{
    public partial class PersonelDBContext : DbContext
    {
        public PersonelDBContext()
        {
        }

        public PersonelDBContext(DbContextOptions<PersonelDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserDepartments> UserDepartments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\enes_\\Documents\\PersonelDB.mdf;Integrated Security=True;Connect Timeout=30");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId).ValueGeneratedNever();

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsFixedLength();
            });

            modelBuilder.Entity<UserDepartments>(entity =>
            {
                entity.HasKey(e => e.UserDeptId)
                    .HasName("PK__UserDepa__B4F7273A0ECFC2AF");

                entity.Property(e => e.UserDeptId)
                    .HasColumnName("UserDeptID")
                    .ValueGeneratedNever();

                entity.Property(e => e.DeptName)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserDepartments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserDepartments_ToUser");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
