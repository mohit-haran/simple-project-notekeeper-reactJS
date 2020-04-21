import React,{useState} from 'react';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';

const NewProjectForm = (props) =>{

    const [modal,setModal] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("");
    const [files,setFiles]=useState('');

    const toggle = () => setModal(!modal);

    const handleSubmit = event =>{
        const file= (files===undefined)?null:files;
        props.addProject(JSON.stringify(Math.random()),title,description,file);
        toggle();
        event.preventDefault();
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 offset-sm-3 mb-5">
                    <Button color="warning" size="lg" onClick={toggle}>Add Project</Button>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                   <Form onSubmit={handleSubmit}>
                       <FormGroup>
                           <Label for="projectTitle">Title</Label>
                           <Input type="text" name="title" id="projectTitle" placeholder="Project Title" onChange={e=>setTitle(e.target.value)} value={title}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="projectDescription">Description</Label>
                           <Input type="textarea" name="description" id="projectDescription" rows={10} onChange={e=>setDescription(e.target.value)} value={description}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="projectFiles">Add Files?</Label>
                           <Input type="file" name="files" id="projectFiles"  onChange={e=>setFiles(e.target.files)} value={files.files} multiple/>
                       </FormGroup>
                       <FormGroup row className="justify-content-end mr-1">
                            <Button type="submit" value="submit" className="mr-2" style={{background:"#00a1eb",border:"none"}}>Add</Button>
                            <Button style={{background:"#fe193a",border:"none"}} onClick={toggle}>Cancel</Button>
                        </FormGroup>
                   </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default NewProjectForm;