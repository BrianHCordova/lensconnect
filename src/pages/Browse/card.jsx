import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import DeleteButton from '../../components/DeleteButton'
//created cards for each image

function Cards({ title, image, userId, username, loggedInUser, imgId }) {

  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  const userLink = '/profile/' + userId

  // return (
  //   <div className="card">
  //       <img src={image} alt={title} id="card-image" />
  //   </div>
  // );

  return (
    <>
    <div className="card">

      <Card
        className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
        >
        <img
          alt={title}
          className="h-full w-full object-cover object-center"
          src={image}
          />
      </Card>
       <Dialog className="w-auto bg-zinc-900 text-white p-2" size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between ml-2 mt-3">
          <div className="flex items-center gap-3">
            {/* <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src=""
              /> */}
            <div className="-mt-px flex flex-col pb-4">
              <Typography
                color="blue-gray"
                className="font-medium text-3xl"
                >
                <Link to={userLink} className="text-stone-200">
                @{username}
                </Link>
              </Typography>
              {/* <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
                >
                @emmaroberts
              </Typography> */}
            </div>
          </div>
          <div className="flex items-center gap-2 relative bottom-2 right-1">
            <IconButton
              color="blue-gray"
              size="sm"
              variant="text"
              onClick={handleOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
        </DialogHeader>
        <DialogBody>

          <img
            alt="nature"
            className="md:h-[40rem] lg:h-[48rem] w-full rounded-lg object-contain px-2"
            src={image}
            />
        </DialogBody>
        <DialogFooter className="justify-between pt-0">
          <div className="flex items-center gap-16 p-3">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Tags
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                To be determined
              </Typography>
            </div>
            {/* <div>
              <Typography variant="small" color="gray" className="font-normal">
                Downloads
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                553,031
              </Typography>
            </div> */}
          </div>
          {loggedInUser === userId ? <DeleteButton imgId={imgId}/>: ''}
        </DialogFooter>
      </Dialog>
</div>
    </>
  );
}

export default Cards;

 
