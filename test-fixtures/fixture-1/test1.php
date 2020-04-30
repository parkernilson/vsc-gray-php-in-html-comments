<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- TEST.1 basic php nested in comment test -->
    <!-- <div>
        <?php
            echo '<div><h1>Header</h1></div>';
        ?>
    </div> -->

    <!-- TEST.2.1 
        basic php nested in comment, 
        but not within html tag.
        > inline
    -->
    <!-- <?php global $abcdef; ?> -->
    
    <!-- TEST.2.2 
        basic php nested in comment,
        but not within html tag.
        > block
    -->
    <!--
        <?php 
            global $bcdefa;
        ?>
    -->

    <!-- TEST.3
        php which contains php comments
    -->
    <!-- 
        <?php
            // this is a php comment
            # this is also a php comment
        ?> 
    -->

    <!-- TEST.4.1
        php which contains html ending comment tag
        > DOES NOT contain closing html comment tag
    -->
    <!--     
        <?php
            echo "-->";
        ?>
    -->

    <!-- TEST.4.2
        php which contains html ending comment tag
        > DOES contain closing html comment tag
    -->
    <!--
        <?php
            echo "-->";

            if(false):
                echo "some stuff";
            else:
                echo "some other logic";
            endif;

            if(true) {
                echo "some other stuff";
            } else {
                echo "some other other logic";
            }

            echo "<!--";
        ?>
    -->

</body>
</html>

<!-- <?php echo "Outside of HTML Tags" ?> -->