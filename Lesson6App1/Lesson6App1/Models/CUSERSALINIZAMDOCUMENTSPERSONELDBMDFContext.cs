using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Lesson6App1.Models
{
    public partial class CUSERSALINIZAMDOCUMENTSPERSONELDBMDFContext : DbContext
    {
        public CUSERSALINIZAMDOCUMENTSPERSONELDBMDFContext()
        {
        }

        public CUSERSALINIZAMDOCUMENTSPERSONELDBMDFContext(DbContextOptions<CUSERSALINIZAMDOCUMENTSPERSONELDBMDFContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\alinizam\\Documents\\PersonelDB.mdf;Integrated Security=True;Connect Timeout=30");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DeptId)
                    .HasName("PK_Table");

                entity.Property(e => e.DeptId).ValueGeneratedNever();

                entity.Property(e => e.DeptName)
                    .HasMaxLength(10)
                    .IsFixedLength(true);
            });
            modelBuilder.Entity<Department>(entity =>
            {
                
            }
            );


                OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
