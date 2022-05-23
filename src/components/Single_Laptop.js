import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";



const navItems = [
    { text: "Home", href: "#home" },
    { text: "Take Test", href: "#takeTest" },
    { text: "Compare Tool", href: "#compareTool" },
  ];

  const example = [
    {
      "brand": "Lenovo", "model": "A6-9225", "processor_brand": "AMD","processor_name": "A6-9225 Processor",
      "processor_gnrtn": "10th", "ram_gb": "4 GB GB", "ram_type": "DDR4", "ssd": "0 GB", "hdd": "1024 GB",
      "os": "Windows", "os_bit": "64-bit", "graphic_card_gb": 0, "weight": "ThinNlight", "display_size": "Missing",
      "warranty": 0, "Touchscreen": "No", "msoffice": "No", "latest_price": 24990, "old_price": 32790, "discount": 23,
      "star_rating": 3.7, "ratings": 63,"reviews": 12
    }];



function Single_Laptop () {

    let laptop_data1 = [
    ["Brand: " + (example[0].brand)],
    ["Model: " + (example[0].model)],
    ["Processor Brand: " + (example[0].processor_brand)],
    ["Processor Name: " + (example[0].processor_name)],
    ["RAM Size: " + (example[0].ram_gb)],
    ["Ram Type: " + (example[0].ram_type)],
    ["OS: " + (example[0].os)]
  ];

  let laptop_data2 = [
    ["OS Bit: " + (example[0].os_bit)],
    ["Weight: " + (example[0].weight)],
    ["Display Size: " + (example[0].display_size)],
    ["Warranty: " + (example[0].warranty)],
    ["Touchscreen: " + (example[0].Touchscreen)],
    ["MS Office: " + (example[0].msoffice)],
    ["Star Rating: " + (example[0].star_rating)]
  ];

  const listItems1 = laptop_data1.map((number) => <li>{number}</li>);
  const listItems2 = laptop_data2.map((number) => <li>{number}</li>);


  const [addCard, setAddCard] = useState([]);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    console.log('Added laptop');
    let newCard = addCard.push;
    console.log('addCard push', newCard);

    setAddCard({...addCard, newCard});
    setShow(true);
  }

  const handleClose = () => {
    console.log('Closed popup')
    setShow(false);
  }



    return (
        <div className="flex flex-col h-screen">
          <div className="flex-1">
            <Header navItems={navItems} />
          </div>

          <div className="container-fluid">

            <div className="row">

              <div className="col-md-6 col-sm-6">
                <img className="p-10" src={"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"} alt={"Laptop"} />
              </div>


              <div className="col-md-6 col-sm-6 mb-50">
                <h1 className="font-bold">Laptop Name</h1>
                <h2 className="font-bold text-blue-700">$100</h2>

                <div className="mt-10"> 
                  <ul>
                    {listItems1}
                  </ul>
                  <ul>
                    {listItems2}
                  </ul>
                </div>
                <button type="button" className="mt-10 laptop_button" onClick={handleClick}>Add to Compare Tool</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        Added New Laptop
                    </Modal.Header>
                    <Modal.Body>
                        You added {example[0].brand} to the compare tool.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                        OK
                        </Button>
                    </Modal.Footer>
                </Modal>
              </div>

              </div>
          </div>
          <Footer/>
        </div>
      );
}

export default Single_Laptop;