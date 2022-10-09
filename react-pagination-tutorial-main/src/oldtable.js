import React from "react";
import "./rise_ticket.css";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import { Container } from "reactstrap";

import { dataTable } from "variables/general";
import { useEffect } from "react";

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{" "}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }{" "}
        entries.
      </label>
    </div>
  ),
});

function RiseTicket() {
  const [yourName, setyourName] = React.useState(false);
  const [emailAddress, setemailAddress] = React.useState(false);
  const [location, setlocation] = React.useState(false);
  const [password, setpassword] = React.useState(false);
  const [paymentMethos, setpaymentMethos] = React.useState(false);
  const [phoneNumber, setphoneNumber] = React.useState(false);
  const [show, setshow] = useState(true);
  const [file, setfile] = useState("");
  const [name, setname] = useState("");
  const [subject, setsubject] = useState("");
  const [text, settext] = useState("");
  const [lenn, setlenn] = useState(0);
  const [textlen, settextlen] = useState(0);
  const [tickets, settickets] = useState([ {
    Ticket_No: "10551876",
    Request_Type: "refund",
    Request_Category: "payment",
    Request_Priority: "medium",
    Created_Date: "2011/04/25",
    HandledBy: "arun",
    Stage:"critical",

    Actions: (
      <div className="actions">
        <p id="10" onClick= {hello}  className="aicons">
          {" "}
          <RemoveRedEyeIcon id="10" />
        </p>
        <p
          className="aiconc"
          
        >
          {" "}
          <ContentCopyIcon />
        </p>
        <p
          className="aicone"
          
        >
          {" "}
          <EditIcon />
        </p>
        <p
          className="aicond"
         
        >
          {" "}
          <DeleteIcon />
        </p>
      </div>
    ),
  }]);
  const [val, setval] = useState("mash");
  const [ab, setab] = useState();
  const [values, setvalues] = useState([]);
 

  const [dttable,setdttable]=useState( [
    {
      Ticket_No: "10551876",
      Request_Type: "refund",
      Request_Category: "payment",
      Request_Priority: "medium",
      Created_Date: "2011/04/25",
      HandledBy: "arun",
      Stage:"critical",

      Actions: (
        <div className="actions">
          <p id="10" onClick= {hello}  className="aicons">
            {" "}
            <RemoveRedEyeIcon id="10" />
          </p>
          <p
            className="aiconc"
            
          >
            {" "}
            <ContentCopyIcon />
          </p>
          <p
            className="aicone"
            
          >
            {" "}
            <EditIcon />
          </p>
          <p
            className="aicond"
           
          >
            {" "}
            <DeleteIcon />
          </p>
        </div>
      ),
    },
    {
      Ticket_No: "167598876219",
      Request_Type: "refund",
      Request_Category: "payment",
      Request_Priority: "high",
      Created_Date: "2011/04/25",
      Stage: "initiated",
      HandledBy: "vithesh",
      Actions: (
        <div className="actions">
          <p
            id="12021"
            className="aicons"
            onClick={(e) => {
              mash(e.tar);
            }}
          >
            {" "}
            <RemoveRedEyeIcon />
          </p>
          <p
            className="aiconc"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <ContentCopyIcon />
          </p>
          <p
            className="aicone"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <EditIcon />
          </p>
          <p
            className="aicond"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <DeleteIcon />
          </p>
        </div>
      ),
    },
    {
      Ticket_No: "103221014",
      Request_Type: "refund",
      Request_Category: "payment",
      Request_Priority: "critical",
      Created_Date: "2011/04/25",
      Stage: "initiated",
      HandledBy: "vithesh",
      Actions: (
        <div className="actions">
          <p
            id="12021"
            className="aicons"
            onClick={(e) => {
              mash(e.tar);
            }}
          >
            {" "}
            <RemoveRedEyeIcon />
          </p>
          <p
            className="aiconc"
            onClick={(e) => {
              // mash(e.target.id);
            }}
          >
            {" "}
            <ContentCopyIcon />
          </p>
          <p
            className="aicone"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <EditIcon />
          </p>
          <p
            className="aicond"
            onClick={(e) => {
              mash(this.dttable[0].dttable);
            }}
          >
            {" "}
            <DeleteIcon />
          </p>
        </div>
      ),
    },
    {
      Ticket_No: "199832219",
      Request_Type: "refund",
      Request_Category: "payment",
      Request_Priority: "medium",
      Created_Date: "2021/04/05",
      HandledBy: "vithesh",
      Stage: "initiated",
      Actions: (
        <div className="actions">
          <p
            id="12021"
            className="aicons"
            onClick={(e) => {
              mash(e.tar);
            }}
          >
            {" "}
            <RemoveRedEyeIcon />
          </p>
          <p
            className="aiconc"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <ContentCopyIcon />
          </p>
          <p
            className="aicone"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <EditIcon />
          </p>
          <p
            className="aicond"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <DeleteIcon />
          </p>
        </div>
      ),
    },
    {
      Ticket_No: "10896419",
      Request_Type: "refund",
      Request_Category: "payment",
      Request_Priority: "low",
      Created_Date: "2021/4/25",
      Stage: "in progress",
      Actions: (
        <div className="actions">
          <p
            id="12021"
            className="aicons"
            onClick={(e) => {
              mash(e.tar);
            }}
          >
            {" "}
            <RemoveRedEyeIcon />
          </p>
          <p
            className="aiconc"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <ContentCopyIcon />
          </p>
          <p
            className="aicone"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <EditIcon />
          </p>
          <p
            className="aicond"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <DeleteIcon />
          </p>
        </div>
      ),
      HandledBy: "vithesh",
    },
    {
      Ticket_No: "10972219",
      Request_Type: "refund",
      Request_Category: "payment",
      Request_Priority: "medium",
      Created_Date: "2011/04/25",
      Stage: "initiated",
      Actions: (
        <div className="actions">
          <p
            id="12021"
            className="aicons"
            onClick={(e) => {
              mash(e.tar);
            }}
          >
            {" "}
            <RemoveRedEyeIcon />
          </p>
          <p
            className="aiconc"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <ContentCopyIcon />
          </p>
          <p
            className="aicone"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <EditIcon />
          </p>
          <p
            className="aicond"
            onClick={(e) => {
              mash(e.target.id);
            }}
          >
            {" "}
            <DeleteIcon />
          </p>
        </div>
      ),
      Name: "mash",
      lastname: "shetty",
      HandledBy: "vithesh",
    },
  ])
  useEffect(() => {
    if (ab) {
      console.log("ab", ab);
    }
  }, [ab]);

let xc;

  useEffect(() => {
    
    //  settickets(dttable);
    let temp = dttable;
    setdttable([])

    let data = temp.map((item) => {
      let x = {
        Ticket_No: item.Ticket_No,
        Request_Type: item.Request_Type,
        Request_Category: item.Request_Category,
        Request_Priority: item.Request_Priority,
        Created_Date: item.Created_Date,
        Stage: item.Stage,
        Actions: (
          <div className="actions">
            <p
              // id={item.Ticket_No}
              className="aicons"
              // onClick={(e) => {
              //   mash(e.target);
              // }}
            >
              {" "}
              <RemoveRedEyeIcon
                id={item.Ticket_No}
                onClick={(e) => {
                  checkk(item.Ticket_No);
                }}
              />
            </p>
            <p
              className="aiconc"
              onClick={(e) => {
                mash(e.target.id);
              }}
            >
              {" "}
              <ContentCopyIcon />
            </p>
            <p
              className="aicone"
              onClick={(e) => {
                mash(e.target.id);
              }}
            >
              {" "}
              <EditIcon />
            </p>
            <p
              className="aicond"
            
            >
              {" "}
              <DeleteIcon  id={item.Ticket_No} onClick={(e) => {
                deleteData(item.Ticket_No,tickets);
              }}/>
            </p>
          </div>
        ),
        Name: item.Name,
        lastname: item.lastname,
        HandledBy: item.HandledBy,
      };
   
      settickets((prev) => [...prev, x]);
      setvalues((prev) => [...prev, x]);
    });
  }, []);
console.log("values",values);
xc =values;

  const checkk = async (e) => {
    console.log("current", e);
    setval(e);



    for (let i = 0; i < dttable.length; i++) {
      if (dttable[i].Ticket_No === e) {
        setab(dttable[i]);
      }
    }
  };

  const hello =()=>{

    console.log("hellooo")
  }

  function deleteData(e,t){
 
    console.log("del data is")
   let dt = t.filter((item)=>{
      if(e != item.Ticket_No){
        return item
      }
    })


    console.log("dt is",dt)
    console.log("values inside",t)
    

     settickets(tickets);
  }

  console.log("values outside",tickets)

  const mash = (e) => {
    // console.log("mash shetty");
    // console.log(e);
    // console.log("val is", val);
  };

  const check = (e) => {
    setlenn(e.length);
  };

  const checktext = (e) => {
    settextlen(e.length);
  };

  const changeshow = () => {
    setshow(!show);
  };

  const filechange = () => {
    setfile();
  };

  const submit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("fill all the data!!");
    }
  };

  const [alert, setAlert] = React.useState(null);
  const componentRef = React.useRef(null);
  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  const copyToClipboardAsTable = (el) => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Good job!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        Copied to clipboard!
      </ReactBSAlert>
    );
  };

  

  return (
    <div className="tb_admin">
      <h1>
        {tickets.map((item) => {
          if (item.Ticket_No === val) return <h1>{item.Ticket_No}</h1>;
        })}
      </h1>

      <div className="container">
        {/* {tickets.map((item)=>{
     if(item.Ticket_No === val)  
          return(
         
              <h1>{item.Ticket_No}</h1>
            

            
          )
        })} */}
        <div className="btnn">
          <Button
            id="rise-button"
            onClick={changeshow}
            className="btn-icon"
            color="primary"
            type="button"
          >
            <span className="btn-inner--icon">Raise ticket</span>
          </Button>
        </div>
        {!show && (
          <Card className="cardd">
            <form
              onSubmit={(e) => {
                submit(e);
              }}
            >
              <CardHeader>
                <h3 className="mb-0">User details</h3>
              </CardHeader>
              <CardBody>
                <Row id="row">
                  <Col md="6">
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-merge", {
                          focused: yourName,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your first name"
                          type="text"
                          onFocus={(e) => setyourName(true)}
                          onBlur={(e) => setyourName(false)}
                          onChange={(e) => setname(e.target.value)}
                          required="required"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-merge", {
                          focused: yourName,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your last name"
                          type="text"
                          onFocus={(e) => setyourName(true)}
                          onBlur={(e) => setyourName(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-merge", {
                          focused: emailAddress,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-envelope" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          type="email"
                          onFocus={(e) => setemailAddress(true)}
                          onBlur={(e) => setemailAddress(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-merge", {
                          focused: phoneNumber,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-globe-americas" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Phone number"
                          type="text"
                          onFocus={(e) => setphoneNumber(true)}
                          onBlur={(e) => setphoneNumber(false)}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="fas fa-phone" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>

              <CardHeader>
                <h3 className="mb-0">Ticket Details</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input md id="exampleFormControlSelect3" type="select">
                        <option value="">Request Type</option>
                        <option>type 1</option>
                        <option>type 2</option>
                        <option>type 3</option>
                        <option>type 4</option>
                        <option>type 5</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input md id="exampleFormControlSelect3" type="select">
                        <option value="">Request Category</option>
                        <option>category 1 </option>
                        <option>category 2 </option>
                        <option>category 3 </option>
                        <option>category 4</option>
                        <option>category 5 </option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input md id="exampleFormControlSelect3" type="select">
                        <option value="">Request Priority</option>
                        <option>low </option>
                        <option>medium </option>
                        <option>high</option>
                        <option>critical</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input md id="exampleFormControlSelect3" type="select">
                        <option value="">Preferred time to connect</option>
                        <option>8 AM to 12 PM </option>
                        <option>12 PM to 8 PM </option>
                        <option>8 PM to 8 AM</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-merge", {
                          focused: emailAddress,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText></InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Enter subject"
                          type="email"
                          onFocus={(e) => setemailAddress(true)}
                          onBlur={(e) => setemailAddress(false)}
                          onChange={(e) => subject(e.target.value)}
                          onKeyDown={(e) => check(e.target.value)}
                          maxlength="250"
                        />
                      </InputGroup>

                      <p className="len">{lenn} / 250</p>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="3"
                        type="textarea"
                        placeholder="Desciption about ticket"
                        onChange={(e) => {
                          settext(e.target.value);
                        }}
                        onKeyDown={(e) => checktext(e.target.value)}
                        maxlength="2000"
                      />
                      <p className="len">{textlen} / 2000</p>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  {" "}
                  <Col md="12">
                    <FormGroup>
                      <div className="custom-file">
                        <input
                          className="custom-file-input"
                          id="customFileLang"
                          lang="en"
                          type="file"
                          onChange={(e) => {
                            setfile(e.target.value);
                          }}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFileLang"
                        >
                          Select file
                        </label>
                        {file && (
                          <div className="file-below">
                            <p className="filename">{file}</p>
                            <div className="filetype">
                              <FormGroup>
                                <Input
                                  md
                                  id="exampleFormControlSelect3"
                                  type="select"
                                >
                                  <option value="">Select document type</option>
                                  <option>doc type 1</option>
                                  <option>doc type 2</option>
                                  <option>doc type 3</option>
                                </Input>
                              </FormGroup>
                            </div>
                            <span onClick={filechange} className="delete">
                              <DeleteIcon />
                            </span>
                          </div>
                        )}
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <div className="submit-ticket">
                <Button
                  onClick={submit}
                  className="btn-icon"
                  color="primary"
                  type="text"
                >
                  submit
                </Button>
              </div>
            </form>
          </Card>
        )}
      </div>

      {show && (
        <Container className="mt--6" fluid>
          <div className="btnn"></div>
          <Row>
            <div className="col">
              <Card>
              
                  <h3 id="head" className="mb-0">work bench</h3>
             
                <ToolkitProvider
               
                  data={tickets}
                  keyField="name"
                  columns={[
                    {
                      dataField: "Ticket_No",
                      text: "Ticket No",
                      sort: true,
                      
                    },
                    {
                      dataField: "Request_Type",
                      text: "Request Type",
                      sort: true,
                    },
                    {
                      dataField: "Request_Category",
                      text: "Request Category",
                      sort: true,
                    },
                    {
                      dataField: "Request_Priority",
                      text: "Request Priority",
                      sort: true,
                    },
                    {
                      dataField: "Created_Date",
                      text: "Created Date",
                      sort: true,
                    },
                    {
                      dataField: "Stage",
                      text: "Stage",
                      sort: true,
                    },
                    {
                      dataField: "HandledBy",
                      text: "Handled By",
                      sort: true,
                    },

                    {
                      dataField: "Actions",
                      text: "Actions",
                      sort: true,
                    },
                  ]}
                >
                  {(props) => (
                    <div className="py-4 table-responsive">
                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4={true}
                        pagination={pagination}
                        bordered={false}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </Card>
            </div>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default RiseTicket;
