<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');  
    // 响应类型  
    header('Access-Control-Allow-Methods:*');  
    $severname = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'mycommonweb';
    $conn = new mysqli($severname,$username,$password,$dbname);
    if($conn->connect_error){
        die('连接失败：' . $conn->connect_error);
    }
    $conn->set_charset('utf8');
    $menu = isset($_GET['menu']) ? $_GET['menu'] : '';
    $class = isset($_GET['class']) ? $_GET['class'] : '';
    $subclass = isset($_GET['subclass']) ? $_GET['subclass'] : '';
    $name = isset($_GET['name']) ? $_GET['name'] : '';
    $url = isset($_GET['url']) ? $_GET['url'] : '';
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    $pClassName = isset($_GET['className']) ? $_GET['className'] : '';
    $pRoute = isset($_GET['route']) ? $_GET['route'] : '';
    $pOrderNumber = isset($_GET['orderNumber']) ? $_GET['orderNumber'] : '';
    $pParentId = isset($_GET['parentId']) ? $_GET['parentId'] : '';
    $pSelfId = isset($_GET['selfId']) ? $_GET['selfId'] : '';
    $pRedirect = isset($_GET['redirect']) ? $_GET['redirect'] : '';
    if($id != '' && $class == ''){
        $sql = "delete from web where id='$id'";
        if ($conn->query($sql) === TRUE) {
                echo "ok";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        $conn->close();
    } 
    if($name != ''){
        $sql = "insert into web (url, name, class, subclass) values ('$url', '$name', '$class', '$subclass')";
        if ($conn->query($sql) === TRUE) {
                echo "ok";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        $conn->close();
    }
    if($subclass != '' && $name == ''){
        $sql = "select * from web where class='$class' and subclass='$subclass'";
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $result->close();
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
        $conn->close();
    }
    if($class != '' && $subclass == ''){
        $sql = "select * from web where class='$class'";
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $result->close();
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
        $conn->close();
    }
    if($menu != ''){
        $sql = "select * from class order by orderNumber asc";
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $result->close();
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
        $conn->close();
    }
    if($pSelfId != ''){
        $sql = "insert into class (selfId, parentId, className, orderNumber, redirect, route) values ('$pSelfId', '$pParentId', '$pClassName', '$pOrderNumber', '$pRedirect', '$pRoute')";
        if ($conn->query($sql) === TRUE) {
                echo "ok";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        $conn->close();
    }
?>