import {
  Card,
  Input,
  Radio,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function HireMeForm() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card
        color="neutral"
        shadow={true}
        border="rounded-xl"
        borderColor="blue-gray-200"
        className="p-7"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              What type of event would you like captured?
            </Typography>
            <select className="border-b-2 border-blue-gray-200 focus:border-blue-gray-900 focus:outline-none">
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday Party</option>
              <option value="corporate">Family Portraits</option>
              <option value="corporate">Family Graduation</option>
              <option value="corporate">Travel & Destination</option>
              <option value="corporate">Corporate</option>
              <option value="other">Other</option>
            </select>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Please specify the date and time of the event:
            </Typography>
            <div className="flex gap-2">
              <Input
                type="date"
                size="lg"
                className="flex-1 !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Input
                type="time"
                size="lg"
                className="flex-1 !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Would you like to receive digital copies of the photos?
            </Typography>
            <div className="flex items-center gap-4">
              <Radio name="photoCopy" value="Yes" label="Yes" />
              <Radio name="photoCopy" value="No" label="No" />
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Is there any additional information you would like to add for me?
            </Typography>
            <textarea
              rows="4"
              className="border-2 border-blue-gray-200 focus:border-blue-gray-900 focus:outline-none p-2"
              placeholder="Enter additional information here..."
            ></textarea>
          </div>
          <Button className="mt-6 bg-emerald-600 hover:bg-emerald-400 duration-200 ease-in-out text-white h-12" fullWidth>
            Hire Me!
          </Button>
        </form>
      </Card>
    </div>
  );
}


