INSERT INTO department (name) VALUES
    ('Sales'),
    ('Legal'),
    ('Finance'),
    ('Engineering');

    INSERT INTO job (title, salary, department_id) 
    VALUES ('Sales Lead', 24000.00, 1),
        ('Salesperson', 19000.00, 1),
        ('Lead Engineer', 37500.00, 4),
        ('Software Engineer', 29500.00, 4),
        ('Hardware Engineer', 28500.00, 4),
        ('Legal Team Lead', 45000.00, 2),
        ('Lawyer', 35000.00, 2),
        ('Account Manager', 35000.00,3),
        ('Accountant', 33000.00, 3);

    INSERT INTO employee (first_name, last_name, job_id, manager_id) 
    VALUES ('John', 'Doe', 1, NULL ),
        ('Jane', 'Smith', 2, 'John Doe'),
        ('Jim', 'Dougs', 2, 'John Doe'),
        ('Derek', 'Simms', 3, NULL ),
        ('Doug', 'Adams', 4, 'Derek Simms'),
        ('Danielle', 'Jones', 5, 'Derek Simms'),
        ('Samantha', 'Grimes', 6, NULL ),
        ('Chris', 'Johns', 7, 'Samantha Grimes'),
        ('Chess', 'Forbes', 7, 'Samantha Grimes'),
        ('Markus', 'Clump', 8, NULL),
        ('Franklin', 'Martinez', 9, 'Markus Clump');
