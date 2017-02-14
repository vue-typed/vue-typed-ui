import { Options, Virtual } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class Alert extends Virtual<Vue>() {

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
		}).then(() => {
			this.$ui.alert("Deleted!", "Your imaginary file has been deleted.", "success");
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
			cancelButtonText: "No, cancel plx!"
		}).then(() => {
			this.$ui.alert("Deleted!", "Your imaginary file has been deleted.", "success");
		}, (dismiss) => {
			// dismiss can be 'cancel', 'overlay',
			// 'close', and 'timer'
			if (dismiss === 'cancel') {
				this.$ui.alert(
					'Cancelled',
					'Your imaginary file is safe :)',
					'error'
				)
			}
		})
	}

	sample6() {
		this.$ui.alert({
			title: "Sweet!",
			text: "Here's a custom image.",
			imageUrl: require("../../../../assets/logo-80.png")
		})
	}

	sample7() {
		this.$ui.alert({
			title: "HTML <small>Title</small>!",
			html: "A custom <span style=\"color: #F8BB86\">html<span> message."
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
			input: 'text',
			showCancelButton: true,
			animation: true,
			inputPlaceholder: "Write something",
			inputValidator: (value) => {
				return new Promise((resolve, reject) => {
					if (value) {
						resolve()
					} else {
						reject('You need to write something!')
					}
				}) as any
			}
		}).then((inputValue) => {
			this.$ui.alert("Nice!", "You wrote: " + inputValue, "success");
		})
	}

	sample10() {
		this.$ui.alert({
			title: "Ajax request example",
			input: 'email',
			showCancelButton: true,
			showLoaderOnConfirm: true,			
			preConfirm: function (email) {
				return new Promise(function (resolve, reject) {
					setTimeout(function () {
						if (email === 'taken@example.com') {
							reject('This email is already taken.')
						} else {
							resolve()
						}
					}, 2000)
				})
			},
			allowOutsideClick: false
		}).then((email) => {
			this.$ui.alert("Email submitted to '" + email + "'!");
		})
	}



}