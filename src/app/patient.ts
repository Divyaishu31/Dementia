export interface Patient {

//   +----------------------+--------------+------+-----+---------+-------+
// | Field                | Type         | Null | Key | Default | Extra |
// +----------------------+--------------+------+-----+---------+-------+
// | uhid                 | varchar(255) | NO   | PRI | NULL    |       |
// | address              | varchar(255) | YES  |     | NULL    |       |
// | age                  | int          | YES  |     | NULL    |       |
// | gender               | varchar(255) | YES  |     | NULL    |       |
// | name                 | varchar(255) | YES  |     | NULL    |       |
// | pc_phone_no          | varchar(255) | YES  |     | NULL    |       |
// | phone_no             | varchar(255) | YES  |     | NULL    |       |
// | primary_contact_name | varchar(255) | YES  |     | NULL    |       |
// +----------------------+--------------+------+-----+---------+-------+

uhid: string;
address: string;
age: number;
gender: string;
name: string;
pc_phone_no: string;
phone_no: string;
primary_contact_name: string;

}
