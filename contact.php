<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
<body>
    <form action="processform.php" method="POST">
        <!--firstName-->
        <div class="form-group row">
            <label for="fname" class="col-sm-2 col-form-label">Firstname:</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="fname" name="first_name" placeholder="Enter Your First Name" >
            </div>
        </div>

        <!--lastName-->
        <div class="form-group row">
            <label for="lname" class="col-sm-2 col-form-label">Lastname:</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="lname" name="last_name" placeholder="Enter Your Last Name">
            </div>
        </div>

        <!--email-->
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" name="email" placeholder="Enter Your Email" required >
            </div>
        </div>

        <!--checkbox-->
        <div class="form-group row">
            <div class="col-sm-10">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck1">
                <label class="form-check-label" for="gridCheck1">
                Always Remember Me
                </label>
            </div>
            </div>
        </div>

        <!--submit btn-->
        <div class="form-group row">
            <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
        </div>
    </form>
</body>
</html>