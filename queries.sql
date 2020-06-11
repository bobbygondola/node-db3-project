-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
/*

Select Product.ProductName, Product.CategoryId, Category.CategoryName
FROM Product
Join Category on Product.CategoryID = Category.ID;

*/

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
/*

select "Order".Id, "Order".ShipVia, "Order".ShippedDate, Shipper.Id, Shipper.CompanyName
From "Order"
Join Shipper on "Order".ShipVia = Shipper.ID
Where ShippedDate < "2012_09_09";

*/

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

/*

select "Order".Id, OrderDetail.OrderId, OrderDetail.Quantity
from "Order"
Join OrderDetail on OrderDetail.OrderId = "Order".Id
Where "Order".Id = "10251";

*/

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

/*

select "Order".EmployeeId, Customer.CompanyName, employee.LastName, OrderDetail.OrderId
from "Order"
join Employee on "Order".EmployeeId = Employee.Id
join Customer on "Order".CustomerId = Customer.Id
join OrderDetail on "Order".Id = OrderDetail.OrderId

*/
