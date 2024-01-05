<?php
    include "conexao.php";

    $quantidade_lote = $_POST['quantidade_lote'];
    $data_validade = $_POST['data_validade'];
    $cod_produto = $_POST['cod_produto'];

    $sql = "call inserir_lote
    ($cod_produto, '$data_validade', $quantidade_lote, $cod_produto)"

    if (mysqli_query($conn, $sql)) {
        echo "Cadastrado com Sucesso"
    }else{
        echo "Error: Nao cadastrado"
    }

    //quantidade existente no lote, data de validade, e codigo do produto
?>

<?php
    include "conexao.php";

    $cnpj_fornecedor = $_POST['cnpj_fornecedor'];
    $nome_fornecedor = $_POST['nome_fornecedor'];
    $tel_fornecedor = $_POST['tel_fornecedor'];

    $sql = "call inserir_fornecedor
    ($cnpj_fornecedor, '$nome_fornecedor', $tel_fornecedor, $cnpj_fornecedor)"

    if (mysqli_query($conn, $sql)) {
        echo "Cadastrado com Sucesso"
    }else{
        echo "Error: Nao cadastrado"
    }
    //CNPJ, nome do fornecedor, telefone do fornecedor, cnpj do fornecedor
?>