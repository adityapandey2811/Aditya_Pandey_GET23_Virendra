select * from customers;

select distinct(city) from customers;

select * from customers where city='berlin' and country='germany';

select * from customers where city='berlin' or country='germany';

select * from customers where city!='berlin' and country!='germany';

select * from customers where customerName like '_a%';

select * from customers where country in  ('spain', 'germany', 'argentina');

select * from customers where city like '%d';

select customerName, country from customers where city is not null;

select * from customers where country='germany' and city in ('berlin','mannheim');

select * from customers where country not in ('germany','usa');

update customers set customerName='allfa' where customerId=1;

desc customers;

update customers set postalCode=13301 where country='uk' and city!='berlin' and customerid between 1 and 10;

update customers set address='f-17 roger road' where city='madrid' and postalCode=28023;

select * from customers order by customerName desc;

select count(*) from customers where city='London' group by city;

select count(*),city from customers group by city;

select * from products where productName like 'c%' and price between 19 and 24;

select count(*) from products group by categoryId order by CategoryID desc;

select categoryId, sum(price) from products group by categoryId;

select supplierId, avg(price) from products group by supplierId;

select productName, price from products order by price limit 1;

select Unit, productName from products where price = (select max(price) from products);

select c.city, c.country, o.ShipperID from customers as c join orders as o on c.customerId=o.CustomerID;

select c.categoryName, c.description, p.price from categories as c join products p on c.CategoryID=p.CategoryID where p.price > 15 and p.price < 25;

select c.customerName, c.postalCode, c.city, o.orderDate, od.quantity from customers as c join orders as o on c.customerId=o.customerId join order_details as od on o.orderId=od.orderId;

select p.productName, p.unit, p.price, o.orderDate from products as p, orders as o;

select p.productName, p.unit, p.price, o.orderDate from orders o join order_details as od on o.OrderID=od.orderId join products as p on p.productId=od.productId;
