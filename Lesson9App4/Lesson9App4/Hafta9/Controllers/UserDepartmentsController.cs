using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Hafta9.Models;
using Microsoft.AspNetCore.Http;

namespace Hafta9.Controllers
{
    public class UserDepartmentsController : Controller
    {
        private readonly PersonelDBContext _context;

        public UserDepartmentsController(PersonelDBContext context)
        {
            _context = context;
        }

        // GET: UserDepartments
        public async Task<IActionResult> Index()
        {
            var ui = HttpContext.Session.GetInt32("UserName");
            var personelDBContext = _context.UserDepartments.Include(u => u.User).Where(u => u.UserId == ui);
            return View(await personelDBContext.ToListAsync());
        }

        // GET: UserDepartments/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userDepartments = await _context.UserDepartments
                .Include(u => u.User)
                .FirstOrDefaultAsync(m => m.UserDeptId == id);
            if (userDepartments == null)
            {
                return NotFound();
            }

            return View(userDepartments);
        }

        // GET: UserDepartments/Create
        public IActionResult Create()
        {
            ViewData["UserId"] = new SelectList(_context.User, "UserId", "Password");
            return View();
        }

        // POST: UserDepartments/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("UserDeptId,UserId,DeptName")] UserDepartments userDepartments)
        {
            if (ModelState.IsValid)
            {
                _context.Add(userDepartments);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["UserId"] = new SelectList(_context.User, "UserId", "Password", userDepartments.UserId);
            return View(userDepartments);
        }

        // GET: UserDepartments/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userDepartments = await _context.UserDepartments.FindAsync(id);
            if (userDepartments == null)
            {
                return NotFound();
            }
            ViewData["UserId"] = new SelectList(_context.User, "UserId", "Password", userDepartments.UserId);
            return View(userDepartments);
        }

        // POST: UserDepartments/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("UserDeptId,UserId,DeptName")] UserDepartments userDepartments)
        {
            if (id != userDepartments.UserDeptId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(userDepartments);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserDepartmentsExists(userDepartments.UserDeptId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["UserId"] = new SelectList(_context.User, "UserId", "Password", userDepartments.UserId);
            return View(userDepartments);
        }

        // GET: UserDepartments/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userDepartments = await _context.UserDepartments
                .Include(u => u.User)
                .FirstOrDefaultAsync(m => m.UserDeptId == id);
            if (userDepartments == null)
            {
                return NotFound();
            }

            return View(userDepartments);
        }

        // POST: UserDepartments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var userDepartments = await _context.UserDepartments.FindAsync(id);
            _context.UserDepartments.Remove(userDepartments);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserDepartmentsExists(int id)
        {
            return _context.UserDepartments.Any(e => e.UserDeptId == id);
        }
    }
}
