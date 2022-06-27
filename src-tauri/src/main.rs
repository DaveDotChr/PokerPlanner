#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::future::{Future, self};

use serde::ser::SerializeStruct;
use tauri::api::http::{ClientBuilder, Client, HttpRequestBuilder, ResponseType};
use tauri::{Manager};

fn main() {
  tauri::Builder::default()
  .setup(|app|{
    #[cfg(debug_assertions)]
    app.get_window("main").unwrap().open_devtools();
    Ok(())
    })
    .invoke_handler(tauri::generate_handler![wait])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
  
}


struct Ticket{
  name: String,
  CHR: usize,
  inhalt: String
}

// impl Future for Ticket{
//     type Output = Ticket;

//     fn poll(self: std::pin::Pin<&mut Self>, cx: &mut std::task::Context<'_>) -> std::task::Poll<Self::Output> {
//         todo!()
//     }
// }

impl serde::Serialize for Ticket{
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer {
          let mut state = serializer.serialize_struct("Ticket", 3)?;
          state.serialize_field("name", &self.name)?;
          state.serialize_field("CHR", &self.CHR)?;
          state.serialize_field("inhalt", &self.inhalt)?;
          state.end()
    }
}

#[tauri::command]
fn wait() -> Result<Vec<Ticket>, String> {
  print!("function wait started");
  // vec![]
  let mut tickets: Vec<Ticket> = Vec::new();
  tickets.push(Ticket { name: String::from("test"), CHR: 12, inhalt: String::from("sdfsdf") });
  Ok(tickets)
  // let client: Client = ClientBuilder::new().build().expect("Failed to create client");
  // let response = client.send(HttpRequestBuilder::new("GET", "https://www.rust-lang.org").unwrap().response_type(ResponseType::Binary)).await;
  // let test: String = String::from("sdfsdfsdf");
  // let test2 = &test;
  // let referenceresp = response.as_ref();
  // print!("Respnse is {}", referenceresp.unwrap().status());
  // String::from(referenceresp.unwrap().status().as_str())

}



