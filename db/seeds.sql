INSERT INTO department (name) VALUES
    ('Sales'),
    ('Legal'),
    ('Finance'),
    ('Engineering');

    INSERT INTO position (title, salary, department_id) VALUES
    ('Sales Lead', 24000.00, 1),
    ('Salesperson', 19000.00, 1),
    ('Lead Engineer', 37500.00, 4),
    ('Software Engineer', 29500.00, 4),
    ('Hardware Engineer', 28500.00, 4),
    ('Legal Team Lead', 45000.00, 2),
    ('Lawyer', 35000.00, 2),
    ('Account Manager', 35000.00,3),
    ('Accountant', 33000.00, 3)

    INSERT INTO employee (first_name, last_name, position_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Jim', 'Dougs', 2, 1),
    ('Derek', 'Simms', 3, NULL),
    ('Doug', 'Adams', 4, 3),
    ('Danielle', 'Jones', 5, 3),
    ('Samantha', 'Grimes', 6, NULL),
    ('Chris', 'Johns', 7, 6),
    ('Chess', 'Forbes', 7, 6),
    ('Markus', 'Clump', 8, NULL),
    ('Franklin', 'Martinez', 9, 8);
