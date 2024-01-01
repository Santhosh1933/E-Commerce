import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [emailContent, setEmailContent] = useState({
    email: "",
    name: "",
    message: "",
  });
  const form = useRef();
  const toast = useToast();

  async function SendEmail(e) {
    e.preventDefault();
    try {
      const loadingToastId = toast({
        title:
          "Your email confirmation is on its way, kindly allow a moment for its delivery. ",
        status: "info",
        duration: null,
        isClosable: false,
        // render: () => <Spinner size="sm" />,
      });
      const result = await emailjs.sendForm(
        "service_o6shfxu",
        "template_nw6gvjd",
        form.current,
        "GciJYyaZ-QJlSgxYJ"
      );
      if (result.text === "OK") {
        toast.close(loadingToastId);
        toast({
          title: "Feedback received! Confirmation email sent.",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast.close(loadingToastId);
      toast({
        title: "Email send Failed",
        description: "try after few minutes",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  return (
    <div>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Kindly forward your feedback via email 📧</DrawerHeader>

          <form ref={form} onSubmit={SendEmail}>
            <DrawerBody className="flex flex-col ">
              <Input
                name="user_name"
                placeholder="Name"
                required
                className="my-2"
              />
              <Input
                placeholder="Email"
                type="email"
                required
                className="my-2"
                name="user_email"
              />
              <Textarea
                resize={"none"}
                placeholder="Enter your FeedBack"
                className="my-2"
                name="message"
              />
            </DrawerBody>

            <DrawerFooter>
              <Button
                className="w-full"
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button type="submit" className="w-full" colorScheme="teal">
                Send Email
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>

      <footer class="bg-teal-50 py-8 rounded-lg ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://vegitableshop.netlify.app/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              {/* <img
              src="https://vegitableshop.netlify.app/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            /> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap ">
                Flowbite
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0 ">
              <li>
                <p class="cursor-pointer hover:underline me-4 md:me-6">About</p>
              </li>
              <li>
                <p class="cursor-pointer hover:underline me-4 md:me-6">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p class="cursor-pointer hover:underline me-4 md:me-6">
                  Licensing
                </p>
              </li>
              <li>
                <p
                  onClick={onOpen}
                  ref={btnRef}
                  class="cursor-pointer hover:underline"
                >
                  Contact
                </p>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-700 sm:text-center ">
            © 2023{" "}
            <a
              href="https://vegitableshop.netlify.app/"
              class="hover:underline"
            >
              Vegitable Shop™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
