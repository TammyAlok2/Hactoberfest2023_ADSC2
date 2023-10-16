//=================================================  HEADER SECTION
#include <iostream>
#include <fstream>
#include <string>
#include<string.h>
#include <iomanip>
#include <conio.h>
#include <stdlib.h>
//================================================= DEFINING STANDARD NAMESPACE
using namespace std;

//================================================= CLASSES SECTION for menus and passwords
class Password
{

private:
	string ad_name;				// ----> admin names
	string ad_pw;				// ----> admin passwords
	string adm_name;									// ----> strings to hold input credentials
	string adm_pw;
	string try_top;
	ifstream admin;
	ifstream stu,marks;
	ofstream mar;

	bool login;
	bool log;
public:
	bool isLogin()											// ----> Function for authenticating the admin login through saved credentials in a file.
	{
		system("cls");
		Password data[3];										// ----> Structure Array for storing the read data from the file
		admin.open("Admin_logs.txt");						// ----> Opening the file for reading
		for (int i = 0; i < 3; i++)
		{
			admin >> data[i].ad_name;
			admin >> data[i].ad_pw;

		}

		login = false;
		cin.ignore();
		cout << " Enter the name of admin: ";				// ----> taking input for credentials
		getline(cin, adm_name);
		cout << " Enter the admin password: ";
		getline(cin, adm_pw);

		for (int i = 0; i < 3; i++)
		{
			if (adm_name == data[i].ad_name && adm_pw == data[i].ad_pw)           // ----> checking for password and user name match
			{
				cout << "\n\n You are successfully logged in ADMIN mode \n\n";
				login = true;
			}
		}
		admin.close();
		return login;															// ----> returning the login value to the function
	}
	bool isLoginTry()
	{
		cout << endl << " Wrong Ussername or Password  Entered!!!!!\n\n" << endl;
		log = false;
		cout << " Do you want to choose another choice ? (y/n)    ";
		cin >> try_top;					// ----> string input for decision
		if (try_top == "y" || try_top == "Y")
		{
			system("cls");
			if (isLogin() == 1)
			{
				log = true;
				system("pause");
				return log;
			}
			else
			{
				isLoginTry();
			}

		}
		else if (try_top == "n" || try_top == "N")
		{
			system("pause");
			exit(0);
		}
		else
		{
			cout << endl << endl << " Wrong choice entered!! The system is exiting due to the wrong format used in admin login. " << endl << endl;
			system("pause");
			exit(0);
		}
		return log;

	}

	bool isLogin1()											// ----> Function for authenticating the admin login through saved credentials in a file.
	{
		int i = 0;
		system("cls");
		stu.open("student.txt");						// ----> Opening the file for reading
		marks.open("Marks.txt");
		mar.open("Marksx.txt");
		int realid,batch,cour;
		char realpass[30];
		char name[30],name1[10], name2[50];
		login = false;
		int idm;
		cout << " Enter id : ";				// ----> taking input for credentials
		cin >> idm;
		cin.ignore();
		cout << " Enter password: ";
		getline(cin, adm_pw);

		while (!stu.eof())
		{
			stu >> realid;
			stu.ignore(10, ',');
			stu.getline(realpass, 30, '-');
			stu.getline(name, 30, ',');
			stu.getline(name1, 10, ',');
			stu >> batch;
			stu.ignore();

			marks.ignore(100, '-');
			marks.getline(name2, 60, '!');
			marks >> cour;
			marks.ignore(10, ',');
			marks.ignore(10, '\n');

			if (realpass == adm_pw && idm == realid)
			{
				mar << realid << "," << name << "-"  << name2 << "!" << cour<<",";
				while (cour > 0)
				{
					mar << "$";
					cour--;
				}
				cout << "\n\n You are successfully logged in Student section \n\n";
				system("pause");
				login = true;
			}

		}
		marks.close();
		mar.close();
		stu.close();
		return login;															// ----> returning the login value to the function
	}
	bool isLoginTry1()
	{
		cout << endl << " Wrong Ussername or Password  Entered!!!!!\n\n" << endl;
		log = false;
		cout << " Do you want to choose another choice ? (y/n)    ";
		cin >> try_top;					// ----> string input for decision
		if (try_top == "y" || try_top == "Y")
		{
			system("cls");
			if (isLogin1() == 1)
			{
				log = true;
				system("pause");
				return log;
			}
			else
			{
				isLoginTry1();
			}

		}
		else if (try_top == "n" || try_top == "N")
		{
			system("pause");
			exit(0);
		}
		else
		{
			cout << endl << endl << " Wrong choice entered!! The system is exiting due to the wrong format used. " << endl << endl;
			system("pause");
			exit(0);
		}
		return log;

	}

	bool isLogin2()											// ----> Function for authenticating the admin login through saved credentials in a file.
	{
		int i = 0;
		system("cls");
		stu.open("teacher.txt");						// ----> Opening the file for reading
		mar.open("teacher_open.txt");
		int realid, id2;
		char realpass[30];
		char name[30], name2[50];
		login = false;
		int idm;
		cout << " Enter id : ";				// ----> taking input for credentials
		cin >> idm;
		cin.ignore();
		cout << " Enter password: ";
		getline(cin, adm_pw);

		while (!stu.eof())
		{
			stu >> realid;
			stu.ignore(10, ',');
			stu.getline(realpass, 30, '-');
			stu.getline(name, 30, '$');
			stu >> id2;
			stu.ignore(10, '.');
			stu.getline(name2, 50, '\n');

			if (realpass == adm_pw && idm == realid)
			{
				mar  << realid << "," << realpass << "-" << name << "$" << id2 << "." << name2;

				cout << "\n\n You are successfully logged in Teacher section \n\n";
				system("pause");
				login = true;
			}

		}
		mar.close();
		stu.close();
		return login;															// ----> returning the login value to the function
	}
	bool isLoginTry2()
	{
		cout << endl << " Wrong Ussername or Password  Entered!!!!!\n\n" << endl;
		log = false;
		cout << " Do you want to choose another choice ? (y/n)    ";
		cin >> try_top;					// ----> string input for decision
		if (try_top == "y" || try_top == "Y")
		{
			system("cls");
			if (isLogin2() == 1)
			{
				log = true;
				system("pause");
				return log;
			}
			else
			{
				isLoginTry2();
			}

		}
		else if (try_top == "n" || try_top == "N")
		{
			system("pause");
			exit(0);
		}
		else
		{
			cout << endl << endl << " Wrong choice entered!! The system is exiting due to the wrong format used. " << endl << endl;
			system("pause");
			exit(0);
		}
		return log;

	}

};
class Menu
{
private:

public:
	void dis()
	{
		system("COLOR 70");
		cout << endl << endl << "        ";
		for (int c = 0; c<30; c++)					// ----> The main heading line
		{
			cout << "*";
		}
		cout << "  _Welcome to The Course Management System_  ";
		for (int c = 0; c<30; c++)
		{
			cout << "*";
		}
		cout << endl;
		cout << endl;

		cout << "\t\t\t\t Please Enter the password to gain access to the system : " << endl << endl;
	}
	void dis1()
	{
		cout << "\t\t______________________________________________________\n\n\t\t\t 1. To gain access to admin mode\n\t\t\t 2. To go to the student section\n\t\t\t 3. To go to the teacher section\n\t\t\t 4. To exit the system \n\t\t______________________________________________________" << endl;
		cout << endl << " Please enter your choice (1-4) :   ";
	}
	void dis2()
	{
		cout << "\t\t______________________________________________________\n\n\t\t\t\t ***Admin Mode*** \n\n\t\t\t 1. To add a student in university database\n\t\t\t 2. To remove a student in university database\n\t\t\t 3. To add a teacher in university database\n\t\t\t 4. To remove a teacher in university database\n\t\t\t 5. To display all Students in university database\n\t\t\t 6. To display all teachers in university database\n\t\t\t 7. To go back to the main menu\n\t\t\t 8. To exit the program \n\t\t______________________________________________________\n";

		cout << endl << " Please enter your choice (1-9) :   ";
	}
	void dis3()
	{
		cout << "\t\t______________________________________________________\n\n\t\t\t\t ***Student Section*** \n\n\t\t\t 1. To see the assigned courses \n\t\t\t 2. To drop an assigned course\n\t\t\t 3. To add a course\n\t\t\t 4. To see the result of all assigned courses \n\t\t\t 5. To go back to the main menu\n\t\t\t 6. To exit the program\n\t\t______________________________________________________\n";

		cout << endl << " Please enter your choice (1-6) :   ";
	}
	void dis4()
	{
		cout << "\t\t______________________________________________________\n\n\t\t\t\t ***Teacher Section*** \n\n\t\t\t 1. To enter marks of a student in a course \n\t\t\t 2. To see the list of courses \n\t\t\t 3. To go back to the main menu\n\t\t\t 4. To exit the program\n\t\t______________________________________________________\n";

		cout << endl << " Please enter your choice (1-5) :   ";
	}

};
class TryPass
{
private:
	string pw;
	int n;
	int a;
public:

	bool trypass()
	{
		n = 0;
		a = 2;
		while (n <= 0)

		{
			cout << "                                              ";
			cin >> pw;									// ----> input password string for login to the library
			if (pw == "p")
			{
				system("cls");
				n = 1;
			}
			else
			{
				cout << "\n\t   You entered the wrong password, please try again by pressing another password. " << a << " tries left.\n\n\n";
				n--;
				a--;
			}
			if (n == -3)
			{
				cout << "\n\t\t\t   You tried many times.The system is exiting. " << endl << endl;
				return false;

			}
		}
	}
};


//================================================= MAIN CLASSES SECTION


class Student
{

public:
	char name[30];
	int id;
	char pass[30];
	int batch;
	char degree[10];
	int t_course;
	char courses[50];
	int sess;
	int mid;
	int final_m;

};
class Teacher
{
public:
	char name[30];
	int id;
	char pass[30];
	char courses[50];
	int t_course;
};

class Teacher_functionality
{
protected:

	class ListNode
	{
	public:
		Teacher data;
		ListNode *next;

		ListNode(Teacher d)
		{
			data = d;
			next = NULL;
		}
	};
	class linked_list
	{
	protected:
		Teacher t;
		Student stude;
		ListNode *head;
		fstream tea, temp, marks, temp1;
		string x[10],x1[10];
	public:
		linked_list()// This will be called when object of LINKEdLIST is created in start
		{
			head = NULL;
		}
		void appendet(Teacher t)
		{
			tea.open("teacher.txt", ios::app);
			if (head == NULL)
			{

				cout << "Enter the id: ";
				cin >> t.id;

				cin.ignore();
				cout << "Enter the name: ";
				cin.getline(t.name, 30);

				cout << "Set the password for ur id: ";
				cin.getline(t.pass, 30);

				cout << "How many courses: ";
				cin >> t.t_course;

				cin.ignore();
				cout << "Enter the name of courses u want to assign (courses must be seperated by commas): ";
				cin.getline(t.courses, 60);

				tea << endl << t.id << "," << t.pass << "-" << t.name << "$" << t.t_course << "." << t.courses;
				head = new ListNode(t);

				tea.close();
				return;
			}
			else
			{
				appendeet(t, head);
			}

		}
		void appendeet(Teacher t, ListNode *tmp)
		{
			if (tmp->next == NULL)
			{

				cout << "Enter the id: ";
				cin >> t.id;

				cin.ignore();
				cout << "Enter the name: ";
				cin.getline(t.name, 30);

				cout << "Set the password for ur id: ";
				cin.getline(t.pass, 30);

				cout << "How many courses: ";
				cin >> t.t_course;

				cin.ignore();
				cout << "Enter the name of courses u want to assign (courses must be seperated by commas): ";
				cin.getline(t.courses, 60);

				tea << endl << t.id << "," << t.pass << "-" << t.name << "$" << t.t_course << "." << t.courses;

				tea.close();

			}
			appendeet(t, tmp->next);
		}

		void displaye()
		{
			cout << endl << endl << "\t\t\t\t\t\t Teacher's Record" << endl << endl;
			cout << endl << endl << right << setw(4) << "ID \t" << left << setw(30) << "Name" << left << setw(20) << "Total courses" << left << setw(60) << "Course names" << endl;
			int f = 0;
			while (f<100)
			{
				cout << "_";
				f++;
			}
			cout << endl << endl;
			if (head == NULL)
			{
				tea.open("teacher.txt");
				tea >> t.id;
				tea.ignore(10, ',');
				tea.ignore(10, '-');
				tea.getline(t.name, 30, '$');
				tea >> t.t_course;
				tea.ignore(10, '.');
				tea.getline(t.courses, 50, '\n');

				head = new ListNode(t);

				tea.close();
			}
			display(head);


		}
		void display(ListNode *tmp)
		{
			tea.open("teacher.txt");
			while (!tea.eof())
			{
				tea >> tmp->data.id;
				tea.ignore(10, ',');
				tea.ignore(10, '-');
				tea.getline(tmp->data.name, 30, '$');
				tea >> tmp->data.t_course;
				tea.ignore(10, '.');
				tea.getline(tmp->data.courses, 50, '\n');

				cout << left << setw(4) << tmp->data.id << "\t" << left << setw(30) << tmp->data.name  << left << setw(20) << tmp->data.t_course << left << setw(60) << tmp->data.courses << endl;
				cout << endl;
			}
			tea.close();
			cout << endl << endl;
		}


		void eraseet()
		{
			string s;
			cout << "Name of the teacher which has to deleted: ";

			cin >> s;

			if(head==NULL)
			{
				tea.open("teacher.txt");
				tea >> t.id;
				tea.ignore(10, ',');
				tea.getline(t.pass, 30, '-');
				tea.getline(t.name, 30, '$');
				tea >> t.t_course;
				tea.ignore(10, '.');
				tea.getline(t.courses, 50, '\n');

				head = new ListNode(t);
				tea.close();
			}
			ListNode *tmp = head;

			tea.open("teacher.txt");
			temp.open("temp.txt", ios::app);

			int a = 1;

			while (!tea.eof())
			{
				tea >> t.id;
				tea.ignore(10, ',');
				tea.getline(t.pass, 30, '-');
				tea.getline(t.name, 30, '$');
				tea >> t.t_course;
				tea.ignore(10, '.');
				tea.getline(t.courses, 50, '\n');
				string sr(t.name);
				if (sr == s)
				{
					tmp->next = new ListNode(t);
					tmp = tmp->next;
					a = 0;
					continue;
				}
				else
				{
					temp << endl << t.id << "," << t.pass << "-" << t.name << "$" << t.t_course << "." << t.courses;
				}
				tmp->next = new ListNode(t);
				tmp = tmp->next;
			}



			temp.close();
			tea.close();
			if (a != 0)
			{
				cout << "\n\n\nNot found\n\n";
				return;
			}

			remove("teacher.txt");
			rename("temp.txt", "teacher.txt");
			eraset(s, head);
		}
		void eraset(string s, ListNode *&tmp)
		{
				string str(tmp->data.name);
				if (str == s)
				{
					tmp = tmp->next;
					cout << "\n\n Task done.\n\n ";
					return;
				}
				eraset(s, tmp->next);

		}

		void see_assigned1()
		{
			tea.open("teacher_open.txt");

			tea.ignore(100, '$');
			tea >> t.id;
			tea.ignore(10, '.');

			int j = t.id;
			int i = 0;
			while (j>0)
			{
				getline(tea, x[i], ',');
				i++;
				j--;
			}
			j = 0;
			cout << "\nThe list of assigned courses is following:-\n ";
			for (int i = 0; i < t.id; i++)
				cout << endl << ++j << ". " << x[i] << "\n";

			cout << endl << endl;
			tea.close();
		}
		void enter_m()
		{
			marks.open("Marks.txt");
			cout << "Enter the name of student you want to enter marks: ";
			string e,f;
			cin >> e;
			int p,tid,i,j,a=0,m;
			while (!marks.eof())
			{
				marks >> t.id;
				marks.ignore(10, ',');
				marks.getline(t.name, 30, '-');
				string str(t.name);
				if (str == e)
				{
					a = 1;
					marks.ignore(50, '!');
					marks >> p;
					marks.ignore(10, ',');
				}
				marks.ignore(100, '\n');
			}
			marks.close();

			if (a != 1)
			{
				cout << "\n\nNot found\n\n";
			}
			else
			{
				j = p;
				marks.open("Marks.txt");
				while (!marks.eof())
				{
					marks >> t.id;
					marks.ignore(10, ',');
					marks.getline(t.name, 30, '-');
					string str(t.name);
					if (str == e)
					{
						i = 0;
						while (j > 0)
						{
							getline(marks, x[i], ',');
							i++;
							j--;
						}
						j = 0;
						cout << "\nThe list of assigned courses is following:-\n ";
						for (int i = 0; i < p; i++)
							cout << endl << ++j << ". " << x[i] << "\n";

						cout << endl << endl;
					}
					marks.ignore(100, '\n');

				}
				marks.close();

				cout << "Enter the name of subject u want to enter marks: ";
				cin >> f;

				tea.open("teacher_open.txt");
				tea.ignore(100, '$');
				tea >> t.id;
				tea.ignore(10, '.');

				int j = t.id;
				int i = 0;
				while (j>0)
				{
					getline(tea, x1[i], ',');
					i++;
					j--;
				}
				tea.close();

				for (int k = 0; k < t.id; k++)
				{
					if (f == x1[k])
					{
						a = 0;
						cout << " \n\n yes u r eligible for entering the marks\n\n";

						int rise = 1,xtra;
						for (int i = 0; i < p; i++)
						{
							if (f == x[i])
							{
								break;
							}
							rise++;
						}

						cout << "Enter sessional marks: ";
						cin >> stude.sess;
						cout << "Enter mid marks: ";
						cin >> stude.mid;
						cout << "Enter final marks: ";
						cin >> stude.final_m;

						marks.open("Marks.txt");
						temp.open("temp.txt",ios::app);

						while (!marks.eof())
						{
							marks >> t.id;
							marks.ignore(10, ',');
							marks.getline(t.name, 30, '-');
							marks.getline(t.courses, 60, '!');
							marks >> tid;
							marks.ignore(60, '\n');

							string str(t.name);
							if (str == e)
							{
								temp << endl << t.id << "," << t.name << "-" << t.courses << "!" << tid << ",";
								rise--;
								for (int i = 0; i < rise; i++)
								{
									temp << "$";
								}
								temp << stude.sess << "," << stude.mid << "," << stude.final_m << ",";
								xtra = tid - rise;
								for (int i = 0; i < xtra; i++)
								{
									temp << "$";
								}
							}
							else
							{
								temp << endl << t.id << "," << t.name << "-" << t.courses << "!" << tid << ",";
								while (tid>0)
								{
									temp << "$";
									tid--;
								}
							}
						}

						marks.close();
						temp.close();
						remove("Marks.txt");
						rename("temp.txt", "Marks.txt");
						cout << " DONE!!!!!!!!!!!!!!!!!!!!1";
					}
				}
				if (a != 0)
				{
					cout << " \n\n u r not eligible for entering the marks\n\n\n";
					return;
				}
			}

		}

};

	char choice;
	Teacher t;
	linked_list s;

public:

	void add_t()
	{
		s.appendet(t);
		cout << " Do u want to see it ? (y/n) ";
		cin >> choice;
		if (choice == 'Y' || choice == 'y')
		{
			s.displaye();
			system("pause");
		}
	}
	void show_d()
	{
		s.displaye();
		system("pause");
	}
	void del_t()
	{
		cout << " Do u want to see the list of teachers ? (y/n) ";
		cin >> choice;
		if (choice == 'Y' || choice == 'y')
		{
			s.displaye();
			system("pause");
		}

		s.eraseet();
		cout << " Do u want to see the changes ? (y/n) ";
		cin >> choice;
		if (choice == 'Y' || choice == 'y')
		{
			s.displaye();
			system("pause");
		}
	}
	void see_assigned_t()
	{
		s.see_assigned1();
		system("pause");

	}
	void enter_marks()
	{
		s.enter_m();
		system("pause");
	}

};

class Admin
{
protected:
	class ListNode
	{
	public:
		Student data;
		ListNode *next;

		ListNode(Student d)
		{
			data = d;
			next = NULL;
		}
	};
	class linked_list {

	protected:
		Student d;
		ListNode *head;
		fstream stu,temp,marks,temp1;
		string x[10],x1[10];
	public:
		linked_list()// This will be called when object of LINKEdLIST is created in start
		{
			head = NULL;
		}
		void appende(Student d)
		{
			stu.open("student.txt", ios::app);
			marks.open("Marks.txt", ios::app);
			if (head == NULL)
			{

				cout << "Enter the id: ";
				cin >> d.id;

				cin.ignore();
				cout << "Enter the name: ";
				cin.getline(d.name, 30);

				cout << "Set the password for ur id: ";
				cin.getline(d.pass, 30);

				cout << "Enter the name of degree: ";
				cin.getline(d.degree, 10);

				cout << "Enter the batch number: ";
				cin >> d.batch;

				cout << "How many courses: ";
				cin >> d.t_course;


				cin.ignore();
				cout << "Enter the name of courses u want to assign (courses must be seperated by commas): ";
				cin.getline(d.courses, 60);

				marks <<endl<< d.id << "," << d.name << "-" << d.courses<<"!"<< d.t_course << ",";
				stu << endl << d.id << "," << d.pass << "-" << d.name << ","<<d.degree<<","<< d.batch;
				head = new ListNode(d);

				stu.close();

				while (d.t_course>0)
				{
					marks << "$";
					d.t_course--;
				}

				marks.close();


				return;
			}
			else
			{
				append(d, head);
			}

		}
		void append(Student d, ListNode *tmp)
		{
			if (tmp->next == NULL)
			{
				cout << "Enter the id: ";
				cin >> d.id;

				cin.ignore();
				cout << "Enter the name: ";
				cin.getline(d.name, 30);

				cout << "Set the password for ur id: ";
				cin.getline(d.pass, 30);

				cout << "Enter the name of degree: ";
				cin.getline(d.degree, 10);

				cout << "Enter the batch number: ";
				cin >> d.batch;

				cout << "How many courses: ";
				cin >> d.t_course;


				cin.ignore();
				cout << "Enter the name of courses u want to assign (courses must be seperated by commas): ";
				cin.getline(d.courses, 60);

				marks << endl << d.id << "," << d.name << "-" << d.courses << "!" << d.t_course << ",";
				stu << endl << d.id << "," << d.pass << "-" << d.name << "," << d.degree << "," << d.batch;

				stu.close();

				while (d.t_course>0)
				{
					marks << "$";
					d.t_course--;
				}

				marks.close();


			}
			append(d, tmp->next);
		}
		void displaye()
		{
			cout << endl << endl << "\t\t\t\t\t\t Students's Record" << endl << endl;
			cout << endl << endl << right << setw(4) << "ID \t" << left << setw(30) << "Name" << left << setw(10) << "Degree" << left << setw(10) << "Batch" << left << setw(20) << "Total courses" << left << setw(60) << "Course names" << endl;
			int t = 0;
			while (t<100)
			{
				cout << "_";
				t++;
			}
			cout << endl << endl;
			if (head == NULL)
			{
				stu.open("student.txt");
				marks.open("Marks.txt");
				stu >> d.id;
				stu.ignore(10, ',');
				stu.ignore(10, '-');
				stu.getline(d.name, 30, ',');
				stu.getline(d.degree, 10, ',');
				stu >> d.batch;
				stu.ignore();

				marks.ignore(100,'-');
				marks.getline(d.courses, 50, '!');
				marks >> d.t_course;
				marks.ignore(10, ',');
				marks.ignore(100, '\n');
				head = new ListNode(d);
				marks.close();
				stu.close();
			}
			display(head);


		}
		void display(ListNode *tmp)
		{
			stu.open("student.txt");
			marks.open("Marks.txt");
			while (!stu.eof())
			{
				stu >> tmp->data.id;
				stu.ignore(10, ',');
				stu.ignore(10, '-');
				stu.getline(tmp->data.name, 30, ',');
				stu.getline(tmp->data.degree, 10, ',');
				stu >> tmp->data.batch;
				stu.ignore();

				marks.ignore(100, '-');
				marks.getline(tmp->data.courses, 60, '!');
				marks >> tmp->data.t_course;
				marks.ignore(10, ',');
				marks.ignore(100, '\n');
				cout << left << setw(4) << tmp->data.id << "\t" << left << setw(30) << tmp->data.name << left << setw(10) << tmp->data.degree<< left << setw(10) << tmp->data.batch << left << setw(20) << tmp->data.t_course << left << setw(60) << tmp->data.courses << endl;
			}
			stu.close();
			marks.close();
		}


		void erasee()
		{
			string s;
			cout << "Name of the student which has to deleted: ";

			cin >> s;

			if (head == NULL)
			{
				stu.open("student.txt");
				marks.open("Marks.txt");
				stu >> d.id;
				stu.ignore(10, ',');
				stu.getline(d.pass, 30, '-');
				stu.getline(d.name, 30, ',');
				stu.getline(d.degree, 10, ',');
				stu >> d.batch;
				stu.ignore();
				marks.ignore(100, '-');
				marks.getline(d.courses, 50, '!');
				marks >> d.t_course;
				marks.ignore(10, ',');
				marks.ignore(100, '\n');


				head = new ListNode(d);
				stu.close();
				marks.close();
			}

			ListNode *tmp = head;

			stu.open("student.txt");
			marks.open("Marks.txt");
			temp.open("temp.txt", ios::app);
			temp1.open("temp1.txt", ios::app);
			int a = 1;
			while (!stu.eof())
			{
				stu >> d.id;
				stu.ignore(10, ',');
				stu.getline(d.pass, 30, '-');
				stu.getline(d.name, 30, ',');
				stu.getline(d.degree, 10, ',');
				stu >> d.batch;
				stu.ignore();
				marks.ignore(100, '-');
				marks.getline(d.courses, 50, '!');
				marks >> d.t_course;
				marks.ignore(10, ',');
				marks.ignore(100, '\n');

				string sr(d.name);
				if (sr==s)
				{
					a = 0;
					tmp->next = new ListNode(d);
					tmp = tmp->next;
					continue;
				}
				else
				{
					temp << endl << d.id << "," << d.pass << "-" << d.name << "," << d.degree << "," << d.batch;
					temp1 << endl << d.id << "," << d.name << "-" << d.courses << "!" << d.t_course << ",";
					while (d.t_course > 0)
					{
						temp1 << "$";
						d.t_course--;
					}
				}
				tmp->next = new ListNode(d);
				tmp = tmp->next;
			}
			temp.close();
			stu.close();
			temp1.close();
			marks.close();

			if (a != 0)
			{
				cout << "\n\n\nNot found\n\n";
				return;
			}


			remove("Marks.txt");
			rename("temp1.txt", "Marks.txt");
			remove("student.txt");
			rename("temp.txt", "student.txt");
			erase(s, head);
		}
		void erase(string s, ListNode *&tmp)
		{
			string str(tmp->data.name);
			if (str == s)
			{
				tmp = tmp->next;
				cout << "\n\n Task done.\n\n " ;
				return;
			}
			erase(s,tmp->next);
		}

		void see_assigned1()
		{
		marks.open("Marksx.txt");

		marks.ignore(100, '!');
		marks >> d.id;
		marks.ignore(10, ',');

		marks.close();
		marks.open("Marksx.txt");
		marks.ignore(100, '-');

		int j = d.id;
		int i = 0;
		while (j>0)
		{
		getline(marks, x[i], ',');
		i++;
		j--;
		}
		j = 0;
		cout << "\nThe list of assigned courses is following:-\n ";
		for (int i = 0; i < d.id; i++)
			cout <<endl<<++j<<". "<< x[i] << "\n";

		cout << endl << endl;
		marks.close();

		}
		void drope()
		{
			see_assigned1();
			cout << "Which course u want to drop:";
			string s;
			cin >> s;
			marks.open("Marksx.txt");
			temp1.open("temp3.txt",ios::app);

			marks >> d.batch;
			marks.ignore(10, ',');
			marks.getline(d.degree, 30, '-');
			marks >> d.id;
			marks.ignore(10, ',');
			int j = d.id;
			int i = 0;
			int k = d.id;
			int a = 0;
			temp1 << d.batch << "," << d.degree << "-"  ;
			while (j>0)
			{
				getline(marks, x[i], ',');
				if (s == x[i])
				{
					a = 1;
					i++;
					j--;
					k=k - 1;
					continue;
				}
				else
				{
					temp1 << x[i]<<",";
				}
				i++;
				j--;
			}
			temp1 << "!" << k << ",";
			for ( int i = 0;  i < k;  i++)
			{
				temp1 << "$";
			}
			if (a != 1)
			{
				cout << "\n\nnot found.\n\n";
				marks.close();
				temp1.close();
			}
			else
			{
				cout << "\n\nTask completed successfully.\n\n";

				marks.close();
				temp1.close();

				remove("Marksx.txt");
				rename("temp3.txt", "Marksx.txt");

				marks.open("Marks.txt");
				temp.open("temp.txt", ios::app);
				while (!marks.eof())
				{
					marks >> d.id;
					marks.ignore(10, ',');
					marks.getline(d.name, 30, '-');
					marks.getline(d.courses, 50, '!');
					marks >> d.t_course;
					marks.ignore(10, ',');
					marks.ignore(100, '\n');

					if (strcmp(d.name, d.degree) == 0)
					{
						temp << endl << d.id << "," << d.name << "-";
						for (int i = 0; i < d.t_course; i++)
						{
							if (s == x[i])
							{
								continue;
							}
							temp << x[i] << ",";
						}
						temp << "!" << k << ",";
						for (int i = 0; i < k; i++)
						{
							temp << "$";
						}
						continue;
					}
					else
					{
						temp << endl << d.id << "," << d.name << "-" << d.courses << "!" << d.t_course << ",";
						while (d.t_course > 0)
						{
							temp << "$";
							d.t_course--;
						}
					}


				}

				marks.close();
				temp.close();
				remove("Marks.txt");
				rename("temp.txt", "Marks.txt");

			}
		}
		void adde()
		{
			cout << "Enter the name of course you want to add: ";
			string s;
			int z;
			char person[30];
			cin >> s;
			marks.open("Marksx.txt");
			temp.open("temp.txt",ios::app);

			marks >> d.id;
			marks.ignore(10, ',');
			marks.getline(d.name, 30, '-');
			marks.getline(d.courses, 50, '!');
			marks >> d.t_course;
			marks.ignore(10, ',');
			marks.ignore(100, '\n');

			d.t_course = d.t_course + 1;
			z = d.t_course;
			temp << d.id << "," << d.name << "-" << s<<","<<d.courses << "!" << d.t_course << ",";
			while (d.t_course>0)
			{
				temp << "$";
				d.t_course--;
			}
			marks.close();
			temp.close();
			remove("Marksx.txt");
			rename("temp.txt", "Marksx.txt");


			strcpy(person, d.name);

			marks.open("Marks.txt");
			temp.open("temp.txt", ios::app);
			while (!marks.eof())
			{
				marks >> d.id;
				marks.ignore(10, ',');
				marks.getline(d.name, 30, '-');
				marks.getline(d.courses, 50, '!');
				marks >> d.t_course;
				marks.ignore(10, ',');
				marks.ignore(100, '\n');

				if (strcmp(d.name, person) == 0)
				{
					temp << endl << d.id << "," << d.name << "-"<<s << "," << d.courses << "!" << z << ",";
					for (int i = 0; i < z; i++)
					{
						temp << "$";
					}
					continue;
				}
				else
				{
					temp << endl << d.id << "," << d.name << "-" << d.courses << "!" << d.t_course << ",";
					while (d.t_course>0)
					{
						temp << "$";
						d.t_course--;
					}
				}


			}

			cout << " \n\n Task completed.\n\n";
			marks.close();
			temp.close();
			remove("Marks.txt");
			rename("temp.txt", "Marks.txt");
		}
		void showe()
		{

			string co;
			char x3[30];
			int rise=0;
			marks.open("Marksx.txt");
			marks.ignore(100, '-');
			getline(marks, co, '!');
			marks.close();

			marks.open("Marks.txt");
			while (!marks.eof())
			{
				marks.ignore(100, '-');
				marks.getline(d.courses, 60, '!');

				string str(d.courses);
				if (co == str)
				{
					marks >> d.id;
					marks.ignore(10, ',');

					for (int i = 0; i < d.id; i++)
					{
						marks.getline(d.pass, 30, '$');

						if (d.pass == NULL)
						{
							x1[i] = "No entry";
							continue;
						}
						x1[i] = d.pass;
					}
				}
				marks.ignore(50, '\n');
			}
			marks.close();


			marks.open("Marksx.txt");

			marks.ignore(100, '!');
			marks >> d.id;
			marks.ignore(10, ',');

			marks.close();
			marks.open("Marksx.txt");
			marks.ignore(100, '-');

			int j = d.id;
			int i = 0;
			while (j>0)
			{
				getline(marks, x[i], ',');
				i++;
				j--;
			}
			j = 0;

			cout << "\nThe marks of assigned courses is following:-\n ";
			cout << endl << "Subjects\t\t\t\tSessional,Mid,Final marks" << endl;
			for (int i = 0; i < 100; i++)
			{
				cout << "_";
			}
			cout << endl;
			for (int i = 0; i < d.id; i++)
			{
				cout << endl << ++j << ". " << x[i] << "\t\t\t\t\t" << x1[i];
				cout << endl;
			}
			cout << endl << endl;
			marks.close();

		}

	};

	char choice;
	Student d;
	linked_list s;

public:
	void show_d()
	{
		s.displaye();
		system("pause");
	}
	void add()
	{
		s.appende(d);
		cout << " Do u want to see it ? (y/n) ";
		cin >> choice;
		if (choice == 'Y' || choice == 'y')
		{
			s.displaye();
			system("pause");
		}
	}
	void del()
	{
		cout << " Do u want to see the list of students ? (y/n) ";
		cin >> choice;
		if (choice == 'Y' || choice == 'y')
		{
			s.displaye();
			system("pause");
		}

		s.erasee();

		cout << " Do u want to see the changes ? (y/n) ";
		cin >> choice;
		if (choice == 'Y' || choice == 'y')
		{
			s.displaye();
			system("pause");
		}
	}
	void see_assigned()
	{
		s.see_assigned1();
		system("pause");

	}
	void drop()
	{
		s.drope();
		system("pause");
	}
	void addc()
	{
		s.adde();
		system("pause");
	}
	void showc()
	{
		s.showe();
		system("pause");
	}
};



int main()
{
	TryPass t;
	string n;
	Teacher_functionality te;
	Password d;
	Admin ad;
	Menu a;
	Student s;
	a.dis();
	if (t.trypass() == 0)
	{
		goto exit;
	}
top1:							// ----> defining label for first screen
	a.dis1();
	cin >> n;
	if (n == "1")
	{	//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		// ADMIN MODE
		if (d.isLogin() == 1)
		{
		top2:
			system("cls");
			a.dis2();
			cin >> n;
			if (n == "1")
			{
				ad.add();
				goto top2;
			}
			if (n == "2")
			{
				ad.del();
				goto top2;
			}
			if (n == "3")
			{
				te.add_t();
				goto top2;
			}
			if (n == "4")
			{
				te.del_t();
				goto top2;
			}
			if (n == "5")
			{
				ad.show_d();
				goto top2;
			}if (n == "6")
			{
				te.show_d();
				goto top2;
			}

			if (n == "7")
			{
				system("cls");
				goto top1;
			}
			if (n == "8")
			{
				goto exit;
			}
			else
			{
				cout << "\n Invalid Entry. Please try again. \n\n";
				system("pause");
				goto top2;
			}
		}
		else
		{
			if (d.isLoginTry() == 1)
			{
				goto top2;
			}
		}
	}

	if (n == "2")
	{
		if (d.isLogin1() == 1)
		{
		top3:
			system("cls");
			a.dis3();
			cin >> n;
			if (n == "1")
			{
				ad.see_assigned();
				goto top3;
			}
			if (n == "2")
			{
				ad.drop();
				goto top3;
			}
			if (n == "3")
			{
				ad.addc();
				goto top3;
			}
			if (n == "4")
			{
				ad.showc();
				goto top3;
			}

			if (n == "5")
			{
				system("cls");
				goto top1;
			}
			if (n == "6")
			{
				goto exit;
			}
			else
			{
				cout << "\n Invalid Entry. Please try again. \n\n";
				system("pause");
				goto top3;
			}
		}
		else
		{
			if (d.isLoginTry1() == 1)
			{
				goto top3;
			}
		}
	}

	if (n == "3")
	{
		if (d.isLogin2() == 1)
		{
		top4:
			system("cls");
			a.dis4();
			cin >> n;
			if (n == "1")
			{
				te.enter_marks();
				goto top4;
			}
			if (n == "2")
			{
				te.see_assigned_t();
				goto top4;
			}
			if (n == "3")
			{
				system("cls");
				goto top1;
			}
			if (n == "4")
			{
				goto exit;
			}
			else
			{
				cout << "\n Invalid Entry. Please try again. \n\n";
				system("pause");
				goto top4;
			}
		}
		else
		{
			if (d.isLoginTry2() == 1)
			{
				goto top4;
			}
		}

	}

	if (n == "4")
	{
		goto exit;
	}
	else
	{
		cout << "\n Invalid Entry. Please try again. \n\n";
		system("pause");
		system("cls");
		goto top1;
	}

exit:
	system("pause");
}
