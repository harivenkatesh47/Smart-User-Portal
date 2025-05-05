# Smart User Portal

The Smart User Portal is a web-based user management interface built using HTML, CSS, and JavaScript. It allows users to input their name and email, view their profile, and reset the form as needed. The project features a clean and modern design, with smooth transitions and user-friendly interactions.

## Features

* **User Form:** Allows users to submit their name and email.
* **Profile Display:** After submission, a profile with the user’s details is shown.
* **Responsive Layout:** Designed to adapt to different screen sizes.
* **Form Reset:** Users can reset the form fields to their initial state.
* **Interactive Button States:** Buttons have hover effects and transition animations for better UX.

## Installation

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your browser to view the portal.

```bash
git clone https://github.com/your-username/smart-user-portal.git
cd smart-user-portal
open index.html
```

## Folder Structure

```
/smart-user-portal
│
├── index.html         # Main HTML file
├── style.css          # Custom styles for the portal
├── app.js             # JavaScript for form submission and profile handling
└── README.md          # This file
```

## Technologies Used

* **HTML:** Used to structure the content.
* **CSS:** Provides styles for layout, form elements, and responsive design.
* **JavaScript:** Handles form submission, dynamic content updates, and user interactions.

## Features

### User Form

The form has fields for:

* **Name** (Required)
* **Email** (Optional)

Upon submission, the entered name and email will be displayed in the profile section.

### Buttons and Interactions

* **Submit Button:** Collects form data and displays it in the profile section.
* **Reset Button:** Clears the form fields for a fresh input.

### Profile Section

After a user submits their details, their name and email are displayed in a styled profile container.

### Expandable Content

There is an expandable section within the profile area that can be toggled open and closed by clicking a button. This feature is ideal for showing additional details or settings in the future.

## Known Issues

* **Browser Compatibility:** While the portal is responsive, it has only been tested in modern browsers (Chrome, Firefox).
* **No Backend Integration:** The form submission does not persist data (no backend connection).

## Future Features

* **Backend Integration:** Save the submitted user data in a database.
* **Authentication System:** Add user login and registration functionality.
* **Enhanced Profile Settings:** Allow users to edit or update their profile.

## Credits

* **Icons & Fonts:** FontAwesome for icons, Google Fonts for typography.
* **Libraries:** N/A

## License

This project is open-source and available under the MIT License.
