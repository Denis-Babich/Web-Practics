$(document).ready(function () {
    $("#form1").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            swal({
                title: "Спасибо!",
                text: "Ваша заявка отправлена! В ближайшее время мы с Вами свяжемся!",
                icon: "success",
            });
            $('#form1')[0].reset();
        });
        return false;
    });
});
$(document).ready(function () {
    $("#form2").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            swal({
                title: "Спасибо!",
                text: "Ваша заявка отправлена! В ближайшее время мы с Вами свяжемся!",
                icon: "success",
            });
            $('#form2')[0].reset();
        });
        return false;
    });
});
$(document).ready(function () {
    $("#form3").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            swal({
                title: "Спасибо!",
                text: "Ваша заявка отправлена! В ближайшее время мы с Вами свяжемся!",
                icon: "success",
            });
            $('#form3')[0].reset();
        });
        return false;
    });
});
$(document).ready(function () {
    $("#form4").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            swal({
                title: "Спасибо!",
                text: "Ваша заявка отправлена! В ближайшее время мы с Вами свяжемся!",
                icon: "success",
            });
            $('#form4')[0].reset();
        });
        return false;
    });
});


$(document).ready(function () {
    $("#form5").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $.fancybox.close();
            swal({
                title: "Спасибо!",
                text: "Ваша заявка отправлена! В ближайшее время мы с Вами свяжемся!",
                icon: "success",
            });
            $('#form5')[0].reset();
        });
        return false;
    });
});

