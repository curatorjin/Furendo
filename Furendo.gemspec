# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "furendo"
  spec.version       = "0.1.0"
  spec.authors       = ["Curator Jin"]
  spec.email         = ["disciple_sneaker@163.com"]

  spec.summary       = "Furendo is a Jekyll theme for GitHub Pages"
  spec.homepage      = "https://github.com/curatorjin/furendo"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|tag|LICENSE|README|_config\.yml)!i) }


  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
