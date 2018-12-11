
//code works only in php file, as js can't activate php code no matter what
//try {
//            // Try Connect to the DB with new MySqli object - Params {hostname, userid, password, dbname}
//            $mysqli = new mysqli("localhost", "root", "mysql", "pizza_database");
//
//            
//            $statement = $mysqli->prepare("select pizzaId, pizzaName, pizzaPicture, pizzaPrice from pizzas limit 10");
//
//
//            $statement->execute(); // Execute the statement.
//            $result = $statement->get_result(); // Binds the last executed statement as a result.
//
//            echo json_encode(($result->fetch_assoc())); // Parse to JSON and print.
//  
//        } catch (mysqli_sql_exception $e) { // Failed to connect? Lets see the exception details..
//            echo "MySQLi Error Code: " . $e->getCode() . "<br />";
//            echo "Exception Msg: " . $e->getMessage();
//            exit(); // exit and close connection.
//        }
//
//        $mysqli->close(); // finally, close the connection