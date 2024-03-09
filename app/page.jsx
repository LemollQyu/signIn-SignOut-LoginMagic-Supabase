import AuthForm from "./comp/AuthForm"

export default function Home() {
  return (
    <>
		<div className="min-h-screen bg-gray-900 text-gray-300">
			<div className="container mx-auto p-6 sm:p-12">
				<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Welcome To My Words</h1>
				
				<p className="text-ls md:text-xl text-white mb-6">
					Your Personal space to curate and manage a word and paragraps of yours favorite.
					Sign In to create, view, edit and delete from your list words
				</p>
				<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
					<AuthForm />
				</div>
			</div>
		</div>
	</>
  );
}
