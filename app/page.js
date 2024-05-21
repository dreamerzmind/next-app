"use client";

import {
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

export default function App() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = () => {
    console.log("Submit", employee);
    fetch("/api/add-employee", {
      method: "POST",
      body: JSON.stringify(employee),
    });
  };

  const handleChange = (prop) => (event) =>
    setEmployee({ ...employee, [prop]: event.target.value });

  return (
    <Card className="py-4 w-1/2 mt-5 mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Employee Form</p>
        <small className="text-default-500">Create New Employee</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col gap-3">
        <Input label="Name" onChange={handleChange("name")} />
        <Input label="Email" type="email" onChange={handleChange("email")} />
        <Input label="Address" onChange={handleChange("address")} />
      </CardBody>
      <CardFooter>
        <Button
          color="primary"
          isLoading={false}
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
