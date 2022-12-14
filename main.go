package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"

	"github.com/visualglitch91/litemoji/webview"
)

//go:embed build/ui
var content embed.FS

func fsHandler() http.Handler {
	sub, err := fs.Sub(content, "build/ui")
	if err != nil {
		panic(err)
	}

	return http.FileServer(http.FS(sub))
}

func main() {
	addr := "localhost:44665"
	debug := false

	if debug == true {
		fmt.Printf("Listening on  http://%s/\n", addr)
	}

	go http.ListenAndServe(addr, fsHandler())

	// Create new webview

	w := webview.New(debug)
	defer 
	w.SetTitle("Litemoji")
	w.SetSize(358, 435, webview.HintFixed)
	w.Center()

	w.Bind("terminate", func() {
		w.Terminate()
	})

	w.Bind("show", func() {
		w.Show()
	})

	w.Navigate(fmt.Sprintf("http://%s", addr))

	w.Hide()
	w.Run()
}
