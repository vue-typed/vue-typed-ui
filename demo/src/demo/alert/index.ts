import { Component, Prop } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Alert extends Base {

	sample1() {
		this.$ui.alert("Here's a message!")
	}

	sample2() {
		this.$ui.alert("Here's a message!", "It's pretty, isn't it?")
	}

	sample3() {
		this.$ui.alert("Good job!", "You clicked the button!", "success")
	}

	sample4() {
		this.$ui.alert({
			title: "Are you sure?",
			text: "You will not be able to recover this imaginary file!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: false
		},
			function () {
				swal("Deleted!", "Your imaginary file has been deleted.", "success");
			})
	}

	sample5() {
		this.$ui.alert({
			title: "Are you sure?",
			text: "You will not be able to recover this imaginary file!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, delete it!",
			cancelButtonText: "No, cancel plx!",
			closeOnConfirm: false,
			closeOnCancel: false
		},
			function (isConfirm) {
				if (isConfirm) {
					swal("Deleted!", "Your imaginary file has been deleted.", "success");
				} else {
					swal("Cancelled", "Your imaginary file is safe :)", "error");
				}
			})
	}

	sample6() {
		this.$ui.alert({
			title: "Sweet!",
			text: "Here's a custom image.",
			imageUrl: "assets/logo-80.png"
		})
	}

	sample7() {
		this.$ui.alert({
			title: "HTML <small>Title</small>!",
			text: "A custom <span style=\"color: #F8BB86\">html<span> message.",
			html: true
		})
	}

	sample8() {
		this.$ui.alert({
			title: "Auto close alert!",
			text: "I will close in 2 seconds.",
			timer: 2000,
			showConfirmButton: false
		})
	}


	sample9() {
		this.$ui.alert({
			title: "An input!",
			text: "Write something interesting:",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: false,
			animation: "slide-from-top",
			inputPlaceholder: "Write something"
		},
			function (inputValue) {
				if (inputValue === false) return false;

				if (inputValue === "") {
					swal.showInputError("You need to write something!");
					return false
				}

				swal("Nice!", "You wrote: " + inputValue, "success");
			})
	}

	sample10() {
		this.$ui.alert({
			title: "Ajax request example",
			text: "Submit to run ajax request",
			type: "info",
			showCancelButton: true,
			closeOnConfirm: false,
			showLoaderOnConfirm: true,
		},
			function () {
				setTimeout(function () {
					swal("Ajax request finished!");
				}, 2000);
			})
	}



}