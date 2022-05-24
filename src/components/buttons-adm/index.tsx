import { ButtonGroup, Button } from "@mui/material";
import { useNavigate, BrowserRouter } from "react-router-dom";

function ButtonsAdm() {
  const navigate = useNavigate();

  const onNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <ButtonGroup>
      <Button
        sx={{ color: "#ffffff", backgroundColor: "#061118" }}
        onClick={() => onNavigate("/createproduct")}
      >
        Cadastrar produto
      </Button>
      <Button
        sx={{ color: "#ffffff", backgroundColor: "#061118" }}
        onClick={() => onNavigate("/stock")}
      >
        Estoque
      </Button>
    </ButtonGroup>
  );
}

export default ButtonsAdm;
