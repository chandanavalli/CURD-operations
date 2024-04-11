import React, { useState, useEffect } from 'react';

function EmployeeManagement() {
  const [showForm, setShowForm] = useState(false); 
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '' }); 
  const [employees, setEmployees] = useState(() => {
    
    const storedEmployees = localStorage.getItem('employees');
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  });

  useEffect(() => {
    
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewEmployee(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    const id = Math.floor(Math.random() * 1000) + 1;
    const newEmployeeWithId = { ...newEmployee, id };
    
    setEmployees(prevEmployees => [...prevEmployees, newEmployeeWithId]);

    setNewEmployee({ name: '', position: '' });
    setShowForm(false);
  };

  return (
    <div>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Employee Management System</h1>
              <p className="lead text-muted">Browse and manage employees.</p>
              <p>
                <button className="btn btn-primary my-2" onClick={() => setShowForm(true)}>Add New Employee</button>
              </p>
            </div>
          </div>
        </section>

        {showForm && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={newEmployee.name} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="position" className="form-label">Position</label>
                    <input type="text" className="form-control" id="position" name="position" value={newEmployee.position} onChange={handleInputChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowForm(false)}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {employees.map(employee => (
              <div key={employee.id} className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{employee.name}</h5>
                    <p className="card-text">{employee.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default EmployeeManagement;
