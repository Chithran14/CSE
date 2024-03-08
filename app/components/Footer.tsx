export default function footer(){
    return(
        <footer className="bg-gray-800 text-white p-8 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Your Event Management Company</h2>
        <p className="mb-2">Making Every Event Memorable</p>
        <p className="mb-4">Phone: +1 (123) 456-7890 | Email: info@eventcompany.com</p>
        <p>123 Event Street, Cityville, State, 12345</p>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Event Management Company. All rights reserved.</p>
      </div>
    </footer>
    );
}