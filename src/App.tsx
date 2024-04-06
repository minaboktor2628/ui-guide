import React, { useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import { Button } from "./components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";



type SeverityType = "low" | "medium" | "high";

interface form {
  severity?: SeverityType;
  username: string;
  password: string;
  date: string;
  picture?: null | File;
}

function App() {
  const [form, setForm] = useState<form>({
    severity: "low",
    username: '',
    password: '',
    date: '',
  });

  const onSubmitForm = () => {
    console.log(form);
  }

  const handleFormChange =
      (event:
           React.ChangeEvent<HTMLInputElement> |
           React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (event.target instanceof HTMLInputElement) {
          // If the target is an input element (e.g., text input or password input)
          const { id, value } = event.target;
          setForm((prevState) => ({
            ...prevState,
            [id]: value,
          }));
        }
        // Handle file input separately
        if (event.target instanceof HTMLInputElement && event.target.type === "file") {
          const selectedPicture = event.target.files && event.target.files.length > 0 ? event.target.files[0] : null;
          setForm((prevState) => ({
            ...prevState,
            picture: selectedPicture,
          }));
        }
        else {
          // If the target is a button element (e.g., radio button)
          const severity = (event.target as HTMLButtonElement).value as SeverityType;
          setForm((prevState) => ({
            ...prevState,
            severity: severity,
          }));
        }
      };

  return (
      <div className={"flex p-5 items-center justify-center h-screen content-center"}>
        <Card className={"flex flex-col w-[400px]"}>
          <CardHeader>
            <CardTitle className={"text-center p-2"}>
              Account login
            </CardTitle>
            <CardDescription className={"text-center"}>
              Enter your information below, and then click the button to log to console.
            </CardDescription>
          </CardHeader>

          <CardContent className={"space-y-3"}>
            <Label>
              User Name
              <Input type={"text"} className={"w-full"} placeholder={"username"} id={"username"} onChange={handleFormChange}/>
            </Label>

            <Label>
              Password
              <Input type={"password"} className={"w-full"} placeholder={"password"} id={"password"} onChange={handleFormChange}/>
            </Label>

            <Label>
              Date
              <Input type={"date"} id={"date"} onChange={handleFormChange}/>
            </Label>

            <Label>
              Picture
              <Input type={"file"} id={"picture"} onChange={handleFormChange} className={"hover:cursor-pointer"}/>
            </Label>

            <RadioGroup className={"p-2"}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={"low"} id={"low"} onClick={handleFormChange}/>
                <Label>Low</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value={"medium"} id={"medium"} onClick={handleFormChange}/>
                <Label>Medium</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value={"high"} id={"high"} onClick={handleFormChange}/>
                <Label>High</Label>
              </div>
            </RadioGroup>

            <Button className={"w-full"} onClick={onSubmitForm}>
              Click to log
            </Button>
          </CardContent>
        </Card>

        {/* Display selected picture */}
        {form.picture && (
            <img src={URL.createObjectURL(form.picture)} alt="Selected"/>
        )}
      </div>
  )
}

export default App
