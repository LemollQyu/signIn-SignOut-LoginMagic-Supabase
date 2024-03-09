const WatchList = () => {
	
	return (
		<>
			<h1>Page Watch-List</h1>
			
			<div className="absolute top-5 right-5">
				<form action="../auth/signout" method="post">
					<button type="submit">
						sign out
					</button>
				</form>
			</div>
			
		</>
	)

}

export default WatchList;
