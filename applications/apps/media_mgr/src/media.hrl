-define(CHUNKSIZE, 24576).

-record(media_file, {
	  stream_url = <<>> :: binary()
	 ,contents = <<>> :: binary()
         ,content_type = <<>> :: binary()
         ,media_name = <<>> :: binary()
	 ,chunk_size = ?CHUNKSIZE :: integer()
	 }).