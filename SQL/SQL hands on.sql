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

select productName, min(price) from products;