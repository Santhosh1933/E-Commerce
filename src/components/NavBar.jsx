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
import { useNavigate, useNavigation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
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
      <nav className="w-full h-[10vh] bg-[#a1df49] flex items-center justify-around fixed">
        <div>Shop</div>
        <div className="flex gap-4 items-center">
          <div className="sm:flex hidden gap-4">
            {navBarItems.map((data, i) => (
              <p onClick={data.navigate} className="cursor-pointer">
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
          <DrawerHeader>Shop</DrawerHeader>

          <DrawerBody>
            <div className="">
              {navBarItems.map((data, i) => (
                <Box position="relative" padding="7">
                  <Divider />
                  <AbsoluteCenter
                    onClick={data.navigate}
                    bg="white"
                    px="2"
                    className="cursor-pointer"
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
