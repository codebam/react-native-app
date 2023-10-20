export const Message = (
	{ sender = "U", message = "...", loading = false }
) => (
	<div className={sender == 'S' ? "message server" : "message user"}>
		<div className="person-icon">
			{ sender }
		</div>
		<div className="inner">
			{ loading ? (<div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
         </div>) : message }
		</div>
	</div>
)