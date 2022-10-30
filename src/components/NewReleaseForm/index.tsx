import Link from 'next/link';
import Modal from 'react-modal';
import {AiOutlineCloudUpload, AiOutlinePlus} from 'react-icons/ai'; 
import {GrClose} from 'react-icons/gr'; 
import { Container } from './styles';

interface AppModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewReleaseForm({ isOpen, onRequestClose }: AppModalProps){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <div className="modal-header">
                <h1>Cadastrar Lançamento</h1>
                <GrClose />
            </div>
            <Container action="">
                <label>
                    <p>Titulo</p>
                    <input type="text" placeholder="Nome do lançamento" id="" />
                </label>
                <label>
                    <p>Data</p>
                    <input type="date" name="" id="" />
                </label>
                <label>
                    <p>categoria</p>
                    <select name="" id="">
                        <option value="">jogos</option>
                        <option value="">séries e filmes</option>
                    </select>
                </label>
                <div className="image-upload-container">
                    <AiOutlineCloudUpload />
                    <p>.jpeg  .png</p>
                    <span>Adicione uma capa relacionada ao lançamento</span>
                    <Link href="/">clique aqui para fazer upload</Link>
                </div>

                <button>cadastrar <AiOutlinePlus /></button>
            </Container>
            
        </Modal>
    )
}