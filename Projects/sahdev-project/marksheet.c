#include<stdio.h>
void main()
{
int rollno,Maths,Physics,BEEE,BCE,Computer,ED,total;
float percentage;
char name[30],institution_name[30],department[30];
printf("enter your rollno:");
scanf("%d",&rollno);
printf("enter your name:");
scanf("%s",name);
printf("enter your institution name:");
scanf("%s",&institution_name);
printf("enter your department:");
scanf("%s",&department);
printf("enter marks of maths:");
scanf("%d",&Maths);
printf("enter marks of physics:");
scanf("%d",&Physics);
printf("enter marks of BEEE:");
scanf("%d",&BEEE);
printf("enter marks of BCE:");
scanf("%d",&BCE);
printf("enter marks of computer:");
scanf("%d",&Computer);
printf("enter marks of ed:");
scanf("%d",&ED);
total=Maths+Physics+BEEE+BCE+Computer+ED;
percentage=total/6.0;
if(percentage>=75)
printf("Honour");
else if(percentage>=60)
printf("First");
else if(percentage>=48)
printf("Second");
else if(percentage>=36)
printf("Pass");
else
printf("Fail");
printf("=========================================================\n");
printf("MARKSHEET OF B.TECH DEPARTMENT :%s,%s\n",department, institution_name);
printf("=========================================================\n");
printf("Roll no.:%d  Student name:%s\n",rollno,name);
printf("---------------------------------------------------------\n");
printf("Subjects\tMax\tMin\tobt.marks\n");
printf("---------------------------------------------------------\n");
printf("Maths\t\t100\t36       %d\n",Maths);
printf("Physics\t\t100\t36       %d\n",Physics);
printf("BEEE\t\t100\t36       %d\n",BEEE);
printf("BCE\t\t100\t36       %d\n",BCE);
printf("Computer\t100\t36       %d\n",Computer);
printf("ED\t\t100\t36       %d\n",ED);
printf("---------------------------------------------------------\n");
printf("                                      total   %d\n",total);
printf("percentage: %f\t\t\t\n",percentage);
printf("---------------------------------------------------------\n");
printf("=========================================================\n");
}
