import React,{useState} from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

const NewProjectForm = () =>{

    const [modal,setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <React.Fragment>
            <Button color="warning" size="lg" onClick={toggle}>Add Project</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                   <Form>
                       <FormGroup>
                           <Label for="projectTitle">Title</Label>
                           <Input type="text" name="title" id="projectTitle" placeholder="Project Title"/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="projectDescription">Description</Label>
                           <Input type="textarea" name="description" id="projectDescription" rows={10}/>
                       </FormGroup>
                       <FormGroup className="button-wrap">
                           <Label for="projectFiles" className="custom-file-upload">Add Files?</Label>
                           <Input type="file" name="files" id="projectFiles" className="custom-file-upload" onChange={(event)=>{console.log(event.target.files[0])}}/>
                       </FormGroup>    
                   </Form>
                </ModalBody>
                <ModalFooter>
                <Button style={{background:"#00a1eb",border:"none"}} >Add</Button>{' '}
                <Button style={{background:"#fe193a",border:"none"}} onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}

export default NewProjectForm;