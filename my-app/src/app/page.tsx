"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  const handleClick =()=>{
    setCount((prevCount) => prevCount +1)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-start ml-0 ">user management</div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">User Management</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Edit User</BreadcrumbLink>
          </BreadcrumbItem>
                 
        </BreadcrumbList>
      </Breadcrumb>

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Edit user details</CardTitle>        
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="" />
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="role">Role</Label>
              <Select>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Admin" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  
                </SelectContent>
              </Select>
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Active" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="admin">Active </SelectItem>
                  <SelectItem value="user">Inactive</SelectItem>
                  
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
       
        <Button>Deploy</Button>
      </CardFooter>
    </Card>

    </main>
  );
}
