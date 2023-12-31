import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useDisclosure,
  useSteps,
  useToast,
} from "@chakra-ui/react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const CheckOut = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const steps = ["Add Address", "Payment", "Successful"];
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [width, setWidth] = useState(window.innerWidth);
  const [isAddress, setIsAddress] = useState("null");
  const [paymentAddress, setPaymentAddress] = useState(
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
  );
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  const navigate = useNavigate();

  const renderStepper = () => {
    if (width > 768)
      return (
        <Stepper index={activeStep} className="w-3/4 mx-auto">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step}</StepTitle>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      );
  };

  const AddressComponent = (props) => {
    const [address, setAddress] = useState({
      name: "",
      doorNo: "",
      street: "",
      city: "",
      district: "",
      pin: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setAddress((prevAddress) => ({
        ...prevAddress,
        [name]: value,
      }));
    };

    const handlePinInputChange = (value) => {
      setAddress((prevAddress) => ({
        ...prevAddress,
        pin: value,
      }));
    };

    return (
      <div>
        {isAddress ? (
          <div className="">
            <p className="text-2xl uppercase font-semibold">Address</p>
            <p className="leading-8 md:py-8 py-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              dolores ducimus dolore unde minus qui consectetur iusto culpa
              distinctio veritatis veniam fuga obcaecati, reprehenderit
              quibusdam non? A, assumenda? Dolor, aperiam!
            </p>
            <button
              onClick={() => {
                setActiveStep(activeStep + 1);
              }}
              className="py-3 bg-green-700 w-full text-white rounded-md"
            >
              Proceed Same Address
            </button>
            <div className="py-8">
              <button
                onClick={onOpen}
                ref={btnRef}
                className="w-full border-dashed py-3 rounded-md border-2 border-slate-700"
              >
                Add New Address
              </button>
            </div>
          </div>
        ) : (
          <div className="py-8">
            <button
              onClick={onOpen}
              ref={btnRef}
              className="w-full border-dashed py-3 rounded-md border-2 border-slate-700"
            >
              Add New Address
            </button>
          </div>
        )}
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"full"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add your Address</DrawerHeader>

            <DrawerBody className="flex flex-col gap-3">
              <Input
                placeholder="Buyer Name"
                name="name"
                value={address.name}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Door number"
                type="number"
                name="doorNo"
                value={address.doorNo}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Street name"
                name="street"
                value={address.street}
                onChange={handleInputChange}
              />
              <Input
                placeholder="City"
                name="city"
                value={address.city}
                onChange={handleInputChange}
              />
              <Input
                placeholder="District"
                name="district"
                value={address.district}
                onChange={handleInputChange}
              />
              <p className="text-gray-500">Pin code :</p>
              <HStack>
                <PinInput otp onChange={handlePinInputChange}>
                  {[...Array(6)].map((_, index) => (
                    <PinInputField key={index} />
                  ))}
                </PinInput>
              </HStack>
              <p>View Address :</p>
              <p>{Object.values(address).join(" ")}</p>
            </DrawerBody>
            <DrawerFooter className="flex w-full justify-between gap-2 items-center">
              <Button
                colorScheme="green"
                className="w-full"
                onClick={() => {
                  const examplePromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                      resolve(200);
                      props.setPaymentAddress(Object.values(address).join(" "));
                      onClose();
                      setActiveStep(activeStep + 1);
                    }, 1000);
                  });
                  toast.promise(examplePromise, {
                    success: {
                      duration: 1000,
                      title: "Address Added Successfully",
                    },
                    error: {
                      title: "Error try after 5 minutes",
                    },
                    loading: {
                      title: "Adding Just wait a Minute",
                      description: "Please wait",
                    },
                  });
                }}
              >
                Save
              </Button>
              <Button variant="outline" className="w-full" onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  };

  const Payment = () => {
    return (
      <div>
        <div>
          <p className="text-2xl py-4">Delivery Address :</p>
          <p className="py-4 leading-7">{paymentAddress}</p>
          <hr />
          <div className="py-4 flex flex-col gap-4">
            <p>Sub total : Rs.3000</p>
            <p>Delivery Charge : Rs.30</p>
            <p className="text-lg font-medium">Total Price : Rs.3003</p>
          </div>
        </div>
        <p>Payment Method : {paymentMethod}</p>
        <RadioGroup
          defaultValue="2"
          onChange={setPaymentMethod}
          value={paymentMethod}
          className="py-4"
        >
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="Cash On Delivery">
              Cash On Delivery
            </Radio>
            <Radio colorScheme="green" value="UPI Payment">
              UPI Payment
            </Radio>
          </Stack>
        </RadioGroup>

        <button
          onClick={() => {
            setActiveStep(activeStep + 1);
          }}
          className="w-full flex justify-center items-center gap-1 py-3 bg-green-700 text-white text-lg rounded-md"
        >
          Proceed 👉
        </button>
      </div>
    );
  };

  const SuccessPage = () => {
    useEffect(() => {
      setActiveStep(activeStep + 1);
    }, []);
    return (
      <div class=" h-screen">
        <div class="p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            class="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Order Placed Successful!
            </h3>
            <p class="text-gray-600 my-2">
              Thank you for completing your secure Order.
            </p>
            <p> Have a great day! </p>
            <div class="py-10 text-center">
              <p
                onClick={() => navigate("/")}
                class="px-12 w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                Continue Shopping
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RenderActiveComponent = () => {
    switch (activeStep) {
      case 0:
        return <AddressComponent setPaymentAddress={setPaymentAddress} />;
      case 1:
        return <Payment />;
      case 2:
        return <SuccessPage />;
      default:
        return <SuccessPage />;
    }
  };

  return (
    <div>
      <NavBar />
      <div className="py-4 w-full">{renderStepper()}</div>
      <div className="w-[98%] sm:w-3/4 mx-auto py-4">
        <RenderActiveComponent />
      </div>
    </div>
  );
};
