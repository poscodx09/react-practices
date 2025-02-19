package ajax.controller.api;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import ajax.domain.Item;
import ajax.dto.JsonResult;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	private final List<Item> items;

	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}
	
	@PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<JsonResult<Item>> create(Item item, MultipartFile file) {
		log.info("Request[POST /item, Content-Type: multipart/form-data][{}, {}]", item, file.getOriginalFilename());
		
		try {
			final String saveFileName = UUID
				.randomUUID()
				.toString()
				.concat(".")
				.concat(file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.')+1));
			
			
			Files.write(Files.createDirectories(Paths.get("/ajax-practices-uploads/images")).resolve(saveFileName), file.getBytes());
			
			Long maxId = Optional
					.ofNullable(items.isEmpty() ? null : items.getFirst())
					.map(t -> t.getId())
					.orElse(0L);
			item.setId(maxId+1);
			item.setImage("/assets/images/" + saveFileName);
			items.addFirst(item);
			
			return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(item));
			
		} catch (Exception ex) {
			throw new RuntimeException(ex);
		}
		
	}
	
	@PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item) {
		log.info("Request[POST /item, Content-Type: application/json][{}]", item);
		
		Long maxId = Optional
			.ofNullable(items.isEmpty() ? null : items.getFirst())
			.map(t -> t.getId())
			.orElse(0L);
		
		
//		Long maxId = items.getFirst().getId();
		item.setId(maxId+1);
		items.addFirst(item);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(item));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> read(@PathVariable Long id) {
		log.info("Request[GET /item/{}]", id);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.stream().filter(t -> t.getId() == id).findAny().orElse(null)));
	}
	
	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read() {
		log.info("Request[GET /item]");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> update(@PathVariable Long id, Item item){
		log.info("Request[PUT /item/{}, Content-Type: application/x-www-form-urlencoded][{}]", id, item);

		Optional<Item> optionalItem = Optional.ofNullable(items.get(items.indexOf(item)));
		optionalItem.ifPresent((Item t) -> {
			t.setName(item.getName());
			t.setType(item.getType());
		});
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(optionalItem.orElse(null)));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long id){
		log.info("Request[DELETE /item/{}]", id);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.removeIf(t -> t.getId() == id) ? id : -1));
	}
}
