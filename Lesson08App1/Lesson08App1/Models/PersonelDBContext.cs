using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Lesson08App1.Models
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

        public virtual DbSet<Departments> Departments { get; set; }
        public virtual DbSet<DepartmentsHistory> DepartmentsHistory { get; set; }
        public virtual DbSet<Employees> Employees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\alinizam\\Documents\\PersonelDB.mdf;Integrated Security=True;Connect Timeout=30");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Departments>(entity =>
            {
                entity.HasKey(e => e.DeptId)
                    .HasName("PK_Table");

                entity.Property(e => e.DeptId).ValueGeneratedNever();

                entity.Property(e => e.DeptName)
                    .HasMaxLength(10)
                    .IsFixedLength();
            });

            modelBuilder.Entity<DepartmentsHistory>(entity =>
            {
                entity.Property(e => e.DeptName)
                    .HasMaxLength(30)
                    .IsFixedLength();
            });

            modelBuilder.Entity<Employees>(entity =>
            {
                entity.HasKey(e => e.Pid);

                entity.Property(e => e.Pid).HasColumnName("PId");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.Employees)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasForeignKey(d => d.DeptId)
                    .HasConstraintName("FK_Employees_ToTable");
                       
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
