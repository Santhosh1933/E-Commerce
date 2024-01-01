import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Avatar,
  Box,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import logo from "../assets/homePageImg.png";

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const navBarItems = [
    {
      name: "Home",
      navigate: () => navigate("/"),
    },
    {
      name: "Shop",
      navigate: () => navigate("/shop"),
    },
  ];

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <nav className="w-full h-[10vh] bg-green-200 z-50 flex items-center justify-around sticky top-0">
        <div>
          <img
            src={logo}
            alt=""
            className="w-[70px] h-[70px] object-cover p-2"
          />
        </div>
        <div className="flex gap-4 items-center">
          <div className="sm:flex hidden gap-4">
            {navBarItems.map((data, i) => (
              <p
              key={i}
                onClick={data.navigate}
                className="cursor-pointer underline underline-offset-4 font-medium"
              >
                {data.name}
              </p>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCart
              className="text-[22px]"
              onClick={() => navigate("/cart")}
            />

            <div className="block sm:hidden" ref={btnRef} onClick={onOpen}>
              <IoMenu className="text-[25px]" />
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <img
              src={logo}
              alt=""
              className="w-[150px] h-[150px] object-cover p-2"
            />
          </DrawerHeader>

          <DrawerBody>
            <div className="">
              {navBarItems.map((data, i) => (
                <Box position="relative" padding="7">
                  <Divider />
                  <AbsoluteCenter
                    onClick={data.navigate}
                    bg="white"
                    px="2"
                    className="cursor-pointer font-medium"
                  >
                    {data.name}
                  </AbsoluteCenter>
                </Box>
              ))}
            </div>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
