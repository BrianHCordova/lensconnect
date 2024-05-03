import React from "react";
import {
  Button,
  Dialog,
  Card,
  Radio,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => setOpen(false); 

  return (
    <>
      <Button onClick={handleOpen}>HIRE ME</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <div className="flex justify-center items-center min-h-screen">
          <Card
            color="neutral"
            shadow={true}
            border="rounded-xl"
            borderColor="blue-gray-200"
            className="px-20 py-7 w-2/6"
          >
            <Typography variant="h4" color="blue-gray">
              Let's Work Together!
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Please fill out our form:
            </Typography>
            <form className="mt-8 mb-6 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Preferred Name"
                  className="border-t-0 appearance-none focus:border-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  What type of event would you like captured?
                </Typography>
                <select className="border-b-2 border-blue-gray-200 focus:border-blue-gray-900 focus:outline-none appearance-none">
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Family Portraits</option>
                  <option value="corporate">Family Graduation</option>
                  <option value="corporate">Travel & Destination</option>
                  <option value="corporate">Corporate</option>
                  <option value="other">Other</option>
                </select>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                >
                  Please specify the date and time of the event:
                </Typography>
                <div className="flex gap-2">
                  <Input
                    type="date"
                    size="lg"
                    className="flex-1 border-t-0 appearance-none focus:border-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Input
                    type="time"
                    size="lg"
                    className="flex-1 border-t-0 appearance-none focus:border-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                >
                  Would you like to receive digital copies of the photos?
                </Typography>
                <div className="flex items-center gap-4">
                  <Radio name="photoCopy" value="Yes" label="Yes" />
                  <Radio name="photoCopy" value="No" label="No" />
                </div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                >
                  Is there any additional information you would like to add
                  for me?
                </Typography>
                <textarea
                  rows="4"
                  className="border-2 border-blue-gray-200 focus:border-blue-gray-900 focus:outline-none p-2"
                  placeholder="Enter additional information here..."
                ></textarea>
                <Button
                  className="mt-6 bg-cyan-600 hover:bg-cyan-400 duration-200 ease-in-out text-white h-12"
                  fullWidth
                  onClick={handleClose}
                >
                  Hire Me!
                </Button>
                <Button
                  className="mt-4 bg-cyan-600 hover:bg-cyan-400 duration-200 ease-in-out text-white h-11"
                  fullWidth
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Dialog>
    </>
  );
}
