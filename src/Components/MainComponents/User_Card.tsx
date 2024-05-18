function UserCard() {
  return (
    <div className="fixed bottom-0 left-0 mb-2 ml-2.5 max-w-xs bg-green-600 shadow-lg rounded-3xl overflow-hidden ">
      <div className="flex items-center px-2 py-1 relative">
        <figure aria-hidden="true">
          <a href="#0">
            <img
              src="https://media.famigliacristiana.it/2017/9/dio-onnipotente_2256403.jpg"
              alt="Profile Pic"
              className="bg-black bg-opacity-0 hover:bg-opacity-50 w-12 h-12 rounded-full object-cover"
            />
          </a>
        </figure>
        <div className="ml-4">
          <p>
            <a href="#0" className="text-lg font-semibold text-gray-900">
              User Name
            </a>
          </p>
          <p className="text-gray-700">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
